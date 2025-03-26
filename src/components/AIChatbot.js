import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';

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

  // Initialize OpenAI client
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
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

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: `user-${Date.now()}`,
      content: inputMessage,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: TRAVEL_CONTEXT_PROMPT },
          { role: "user", content: inputMessage }
        ],
        max_tokens: 150
      });

      const aiResponseText = response.choices[0]?.message?.content || 
        "I'm having trouble generating a response. Could you rephrase your question?";

      const aiResponse = {
        id: `ai-${Date.now()}`,
        content: aiResponseText,
        sender: 'ai'
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Chatbot error:', error);
      
      const errorMessage = error.response 
        ? `Sorry, I encountered an error: ${error.response.data.error}`
        : 'Sorry, our travel assistant is taking a short break. Please try again later.';

      setMessages(prev => [...prev, {
        id: `error-${Date.now()}`,
        content: errorMessage,
        sender: 'ai'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

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
          </div>
          
          <div className="h-96 overflow-y-auto p-4">
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