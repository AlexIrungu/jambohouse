import React, { useState, useEffect } from 'react';
import Anthropic from '@anthropic-ai/sdk';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 'initial', 
      content: "Welcome to our Travel Companion! I'm here to help you plan amazing safari adventures in Kenya, Tanzania, and Rwanda. What destination are you curious about?", 
      sender: 'ai' 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_ANTHROPIC_API_KEY || '');
  const [apiKeyError, setApiKeyError] = useState(false);

  // Check if API key is available on component mount
  useEffect(() => {
    if (!apiKey) {
      console.error('API key not found. Please check your environment variables.');
      setApiKeyError(true);
    } else {
      console.log('API key is set:', apiKey.substring(0, 5) + '...');
    }
  }, [apiKey]);

  // Initialize Anthropic client with dangerouslyAllowBrowser option
  const anthropic = new Anthropic({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
  });

  // Travel-specific system prompt
  const TRAVEL_CONTEXT_PROMPT = `
    You are a knowledgeable travel assistant specializing in African safaris. 
    Provide detailed, helpful information about:
    - Safari destinations in Kenya, Tanzania, and Rwanda
    - Wildlife viewing recommendations
    - Travel tips and cultural insights
    - Seasonal travel advice
    - Accommodation suggestions
    - National park information
    - Safari package details

    Always be friendly, informative, and focus on travel-related topics.
    Keep responses concise, engaging, and tailored to safari travel.
  `;

  useEffect(() => {
    // Initialize conversation history with system message
    setConversation([
      { role: "assistant", content: messages[0].content }
    ]);
  }, []);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    if (apiKeyError) {
      setMessages(prev => [...prev, {
        id: `error-${Date.now()}`,
        content: "API key not configured properly. Please check your environment setup.",
        sender: 'ai'
      }]);
      return;
    }

    // Add user message to UI
    const userMessage = {
      id: `user-${Date.now()}`,
      content: inputMessage,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    
    // Add user message to conversation history
    const updatedConversation = [
      ...conversation,
      { role: "user", content: inputMessage }
    ];
    setConversation(updatedConversation);
    
    setInputMessage('');
    setIsLoading(true);

    try {
      console.log("Sending request to Anthropic API...");
      console.log("Conversation:", updatedConversation);
      
      // Use the current model name: claude-3-sonnet-20240229 was not found
      const response = await anthropic.messages.create({
        model: "claude-3-7-sonnet-20250219", // Updated model name
        system: TRAVEL_CONTEXT_PROMPT,
        messages: updatedConversation,
        max_tokens: 300
      });

      console.log("Response received:", response);
      const aiResponseText = response.content[0].text;

      // Add AI response to UI
      const aiResponse = {
        id: `ai-${Date.now()}`,
        content: aiResponseText,
        sender: 'ai'
      };
      setMessages(prev => [...prev, aiResponse]);
      
      // Update conversation history with AI response
      setConversation([
        ...updatedConversation,
        { role: "assistant", content: aiResponseText }
      ]);
    } catch (error) {
      console.error('Chatbot error:', error);
      
      let errorMessage = 'Sorry, our travel assistant is taking a short break. Please try again later.';
      
      if (error.response) {
        errorMessage = `API Error (${error.response.status}): ${error.response.statusText}`;
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      // Check for common API errors
      if (error.message?.includes('401')) {
        errorMessage = "Authentication failed. Please check your API key.";
      } else if (error.message?.includes('429')) {
        errorMessage = "Rate limit exceeded. Please try again later.";
      } else if (error.message?.includes('404')) {
        errorMessage = "Model not found. Trying alternative model...";
        
        // Try with a fallback model
        try {
          const fallbackResponse = await anthropic.messages.create({
            model: "claude-3-opus-20240229", // First fallback
            system: TRAVEL_CONTEXT_PROMPT,
            messages: updatedConversation,
            max_tokens: 300
          });
          
          const aiResponseText = fallbackResponse.content[0].text;
          
          const aiResponse = {
            id: `ai-${Date.now()}`,
            content: aiResponseText,
            sender: 'ai'
          };
          
          setMessages(prev => [...prev, aiResponse]);
          setConversation([
            ...updatedConversation,
            { role: "assistant", content: aiResponseText }
          ]);
          
          setIsLoading(false);
          return;
        } catch (fallbackError) {
          console.error('Fallback model error:', fallbackError);
          errorMessage = "All available models failed. Please check your API access.";
        }
      }

      setMessages(prev => [...prev, {
        id: `error-${Date.now()}`,
        content: errorMessage,
        sender: 'ai'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Add auto-scroll effect for chat messages
  useEffect(() => {
    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={toggleChatbot}
        className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
      >
        {isOpen ? '✕' : '🌍 Travel Assistant'}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 bg-white border-2 border-green-500 rounded-lg shadow-xl">
          <div className="bg-green-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <span>Safari Travel Assistant</span>
            {apiKeyError && (
              <span className="text-yellow-300 text-xs">⚠️ API Key Issue</span>
            )}
          </div>
          
          <div className="h-96 overflow-y-auto p-4" id="chat-messages">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`mb-2 p-2 rounded-lg max-w-[80%] ${
                  msg.sender === 'user' 
                    ? 'bg-blue-100 text-right ml-auto' 
                    : 'bg-green-50 text-left mr-auto'
                }`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="text-center text-green-500">Assistant is preparing your travel insights...</div>
            )}
          </div>

          <div className="flex p-2 border-t">
            <input 
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about safaris, destinations, wildlife..."
              className="flex-grow p-2 border rounded-l-lg"
            />
            <button 
              onClick={handleSendMessage}
              className="bg-green-600 text-white p-2 rounded-r-lg hover:bg-green-700"
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;