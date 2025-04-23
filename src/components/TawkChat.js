import React, { useEffect, useRef } from 'react';

/**
 * TawkChat Component for tourism website
 * 
 * A React component to integrate Tawk.to live chat service.
 */
const TawkChat = () => {
  const tawkToScriptLoaded = useRef(false);
  
  useEffect(() => {
    // Property and widget IDs from your Tawk.to dashboard
    const propertyId = '67e59909be53a31908e09188';
    const widgetId = '1incdrjnv';

    // If the script is already loaded, don't load it again
    if (window.Tawk_API) {
      return;
    }

    // Prevent multiple script insertions
    if (tawkToScriptLoaded.current) return;
    tawkToScriptLoaded.current = true;

    // Setup Tawk_API configuration
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    
    // Tourism-specific event handlers
    window.Tawk_API.onChatStarted = function() {
      // You can track this in analytics if needed
      console.log('Visitor started a chat');
    };
    
    window.Tawk_API.onChatEnded = function() {
      console.log('Chat session ended');
    };

    // Create and insert the Tawk.to script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    document.body.appendChild(script);

    // Cleanup function to remove the script on unmount
    return () => {
      // Remove the script element
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      // Cleanup Tawk_API
      if (window.Tawk_API) {
        if (window.Tawk_API.hideWidget) {
          window.Tawk_API.hideWidget();
        }
        
        // Remove event handlers
        window.Tawk_API.onChatStarted = null;
        window.Tawk_API.onChatEnded = null;
      }
      
      // Reset flag
      tawkToScriptLoaded.current = false;
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default TawkChat;