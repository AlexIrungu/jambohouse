import React, { useState, useEffect } from 'react';
import { 
  Type, 
  MoonStar, 
  Sun, 
  Minus, 
  Plus, 
  Underline, 
  Speech, 
  MousePointer, 
  X, 
  LayoutGrid, 
  Pause,
  Play
} from 'lucide-react';

const AccessibilityTools = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [bigCursor, setBigCursor] = useState(false);
  const [readingGuide, setReadingGuide] = useState(false);
  const [readingGuidePosition, setReadingGuidePosition] = useState(0);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [readingContent, setReadingContent] = useState("");
  const [speechSynthesis, setSpeechSynthesis] = useState(null);

  useEffect(() => {
    // Load saved accessibility settings from localStorage
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setFontSize(settings.fontSize || 1);
      setHighContrast(settings.highContrast || false);
      setDarkMode(settings.darkMode || false);
      setUnderlineLinks(settings.underlineLinks || false);
      setBigCursor(settings.bigCursor || false);
      setHighlightLinks(settings.highlightLinks || false);
    }

    // Add mouse move event listener for reading guide
    const handleMouseMove = (e) => {
      if (readingGuide) {
        setReadingGuidePosition(e.clientY);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initialize speech synthesis
    if (window.speechSynthesis) {
      setSpeechSynthesis(window.speechSynthesis);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (speaking && speechSynthesis) {
        speechSynthesis.cancel();
      }
    };
  }, [readingGuide, speaking, speechSynthesis]);

  // Save settings to localStorage when they change
  useEffect(() => {
    const settings = {
      fontSize,
      highContrast,
      darkMode,
      underlineLinks,
      bigCursor,
      highlightLinks
    };
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
    
    // Apply settings to document
    document.documentElement.style.fontSize = `${fontSize}rem`;
    
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
    
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
    if (underlineLinks) {
      document.body.classList.add('underline-links');
    } else {
      document.body.classList.remove('underline-links');
    }
    
    if (bigCursor) {
      document.body.classList.add('big-cursor');
    } else {
      document.body.classList.remove('big-cursor');
    }
    
    if (highlightLinks) {
      document.body.classList.add('highlight-links');
    } else {
      document.body.classList.remove('highlight-links');
    }
    
  }, [fontSize, highContrast, darkMode, underlineLinks, bigCursor, highlightLinks]);

  const speakText = () => {
    if (!speechSynthesis) return;
    
    if (speaking) {
      speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    
    // Get text content from the main elements
    const mainContent = document.querySelector('main') || document.querySelector('.main-content') || document.body;
    const text = mainContent.textContent.replace(/\s+/g, ' ').trim();

    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setSpeaking(false);
      speechSynthesis.speak(utterance);
      setReadingContent(text);
      setSpeaking(true);
    }
  };

  const increaseFontSize = () => {
    if (fontSize < 2) {
      setFontSize(prev => Math.min(prev + 0.1, 2));
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 0.8) {
      setFontSize(prev => Math.max(prev - 0.1, 0.8));
    }
  };

  const resetSettings = () => {
    setFontSize(1);
    setHighContrast(false);
    setDarkMode(false);
    setUnderlineLinks(false);
    setBigCursor(false);
    setReadingGuide(false);
    setHighlightLinks(false);
    if (speaking && speechSynthesis) {
      speechSynthesis.cancel();
      setSpeaking(false);
    }
  };

  return (
    <>
      {/* Accessibility button */}
      <button 
        aria-label="Open accessibility tools" 
        onClick={() => setIsOpen(true)}
        className="fixed z-40 bottom-4 right-4 bg-hunyadi-yellow text-cafe-noir p-3 rounded-full shadow-lg hover:bg-princeton-orange focus:outline-none focus:ring-2 focus:ring-mindaro"
      >
        <LayoutGrid size={24} />
      </button>

      {/* Accessibility panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" role="dialog" aria-modal="true">
          <div className="bg-eggshell text-cafe-noir rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-french-gray">
              <h2 className="text-xl font-bold">Accessibility Tools</h2>
              <button 
                onClick={() => setIsOpen(false)} 
                aria-label="Close accessibility tools"
                className="text-cafe-noir hover:text-claret focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-4 max-h-[80vh] overflow-y-auto">
              <div className="grid gap-4">
                {/* Font size controls */}
                <div className="flex items-center justify-between">
                  <span className="font-medium flex items-center">
                    <Type size={20} className="mr-2" /> Font Size
                  </span>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={decreaseFontSize} 
                      disabled={fontSize <= 0.8}
                      aria-label="Decrease font size"
                      className="bg-columbia-blue hover:bg-french-gray disabled:opacity-50 rounded p-2"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center">{Math.round(fontSize * 100)}%</span>
                    <button 
                      onClick={increaseFontSize} 
                      disabled={fontSize >= 2}
                      aria-label="Increase font size"
                      className="bg-columbia-blue hover:bg-french-gray disabled:opacity-50 rounded p-2"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                
                {/* Color modes */}
                <div className="flex items-center justify-between">
                  <span className="font-medium flex items-center">
                    <MoonStar size={20} className="mr-2" /> Dark Mode
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={darkMode} 
                      onChange={(e) => setDarkMode(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-french-gray rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-moss-green"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium flex items-center">
                    <Sun size={20} className="mr-2" /> High Contrast
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={highContrast} 
                      onChange={(e) => setHighContrast(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-french-gray rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-moss-green"></div>
                  </label>
                </div>
                
                {/* Underline links */}
                <div className="flex items-center justify-between">
                  <span className="font-medium flex items-center">
                    <Underline size={20} className="mr-2" /> Underline Links
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={underlineLinks} 
                      onChange={(e) => setUnderlineLinks(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-french-gray rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-moss-green"></div>
                  </label>
                </div>
                
                {/* Highlight links */}
                <div className="flex items-center justify-between">
                  <span className="font-medium flex items-center">
                    <Underline size={20} className="mr-2" /> Highlight Links
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={highlightLinks} 
                      onChange={(e) => setHighlightLinks(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-french-gray rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-moss-green"></div>
                  </label>
                </div>
                
                {/* Big cursor */}
                <div className="flex items-center justify-between">
                  <span className="font-medium flex items-center">
                    <MousePointer size={20} className="mr-2" /> Big Cursor
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={bigCursor} 
                      onChange={(e) => setBigCursor(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-french-gray rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-moss-green"></div>
                  </label>
                </div>
                
                {/* Reading guide */}
                <div className="flex items-center justify-between">
                  <span className="font-medium flex items-center">
                    <Type size={20} className="mr-2" /> Reading Guide
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={readingGuide} 
                      onChange={(e) => setReadingGuide(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-french-gray rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-moss-green"></div>
                  </label>
                </div>
                
                {/* Screen reader */}
                <div className="flex items-center justify-between">
                  <span className="font-medium flex items-center">
                    <Speech size={20} className="mr-2" /> Screen Reader
                  </span>
                  <button 
                    onClick={speakText} 
                    aria-label={speaking ? "Stop reading" : "Read page aloud"}
                    className={`flex items-center px-3 py-2 rounded ${speaking ? 'bg-claret text-white' : 'bg-moss-green text-white'}`}
                  >
                    {speaking ? <><Pause size={16} className="mr-1" /> Stop</> : <><Play size={16} className="mr-1" /> Read</>}
                  </button>
                </div>
                
                {/* Reset button */}
                <button 
                  onClick={resetSettings}
                  className="mt-4 w-full bg-cafe-noir text-eggshell py-2 rounded hover:bg-claret transition-colors focus:outline-none focus:ring-2 focus:ring-mindaro"
                >
                  Reset All Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Reading guide element */}
      {readingGuide && (
        <div 
          className="fixed left-0 right-0 z-30 h-12 bg-mindaro bg-opacity-20 pointer-events-none"
          style={{ top: readingGuidePosition - 24 }}
          aria-hidden="true"
        ></div>
      )}
      
      {/* Inject global styles */}
      <style jsx global>{`
        body.dark-mode {
          background-color: #222;
          color: #eee;
        }
        
        body.dark-mode a {
          color: #BAD7F2;
        }
        
        body.high-contrast {
          background-color: #000;
          color: #fff;
        }
        
        body.high-contrast a,
        body.high-contrast button:not([disabled]) {
          color: #F5FF90;
        }
        
        body.underline-links a {
          text-decoration: underline !important;
          text-decoration-thickness: 2px !important;
        }
        
        body.highlight-links a {
          background-color: #F5FF90 !important;
          color: #563F1B !important;
          padding: 0 4px;
          border-radius: 2px;
        }
        
        body.big-cursor,
        body.big-cursor * {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'%3E%3Cpath d='M5.33331 5.33334V22.6667L10.6666 17.3333H20L5.33331 5.33334Z' fill='black' stroke='white' stroke-width='2'/%3E%3C/svg%3E"), auto !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilityTools;