import React, { useEffect, useRef } from 'react';

/**
 * TawkToChat Component
 * 
 * A React component to integrate Tawk.to live chat service.
 * 
 * @param {Object} props
 * @param {string} props.propertyId - Your Tawk.to Property ID
 * @param {string} props.widgetId - Your Tawk.to Widget ID
 * @param {Object} [props.customization] - Optional customization settings
 * @param {Function} [props.onLoad] - Callback function when Tawk.to script is loaded
 * @param {Function} [props.onStatusChange] - Callback function when chat status changes
 * @param {Function} [props.onChatMaximized] - Callback function when chat is maximized
 * @param {Function} [props.onChatMinimized] - Callback function when chat is minimized
 * @param {Function} [props.onChatHidden] - Callback function when chat is hidden
 * @param {Function} [props.onChatStarted] - Callback function when chat is started
 * @param {Function} [props.onChatEnded] - Callback function when chat is ended
 */
const TawkToChat = ({
  propertyId,
  widgetId,
  customization = {},
  onLoad,
  onStatusChange,
  onChatMaximized,
  onChatMinimized,
  onChatHidden,
  onChatStarted,
  onChatEnded
}) => {
  const tawkToScriptLoaded = useRef(false);
  
  useEffect(() => {
    if (!propertyId || !widgetId) {
      console.error('TawkToChat: propertyId and widgetId are required.');
      return;
    }

    // If the script is already loaded, don't load it again
    if (window.Tawk_API) {
      if (onLoad && typeof onLoad === 'function') {
        onLoad();
      }
      return;
    }

    // Prevent multiple script insertions
    if (tawkToScriptLoaded.current) return;
    tawkToScriptLoaded.current = true;

    // Setup Tawk_API configuration
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Handle events if callbacks are provided
    if (onStatusChange && typeof onStatusChange === 'function') {
      window.Tawk_API.onStatusChange = onStatusChange;
    }
    
    if (onChatMaximized && typeof onChatMaximized === 'function') {
      window.Tawk_API.onChatMaximized = onChatMaximized;
    }
    
    if (onChatMinimized && typeof onChatMinimized === 'function') {
      window.Tawk_API.onChatMinimized = onChatMinimized;
    }
    
    if (onChatHidden && typeof onChatHidden === 'function') {
      window.Tawk_API.onChatHidden = onChatHidden;
    }
    
    if (onChatStarted && typeof onChatStarted === 'function') {
      window.Tawk_API.onChatStarted = onChatStarted;
    }
    
    if (onChatEnded && typeof onChatEnded === 'function') {
      window.Tawk_API.onChatEnded = onChatEnded;
    }
    
    // Apply any customizations
    if (customization) {
      Object.keys(customization).forEach(key => {
        window.Tawk_API[key] = customization[key];
      });
    }

    // Create and insert the Tawk.to script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    script.onload = () => {
      if (onLoad && typeof onLoad === 'function') {
        onLoad();
      }
    };

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
        window.Tawk_API.onStatusChange = null;
        window.Tawk_API.onChatMaximized = null;
        window.Tawk_API.onChatMinimized = null;
        window.Tawk_API.onChatHidden = null;
        window.Tawk_API.onChatStarted = null;
        window.Tawk_API.onChatEnded = null;
      }
      
      // Reset flag
      tawkToScriptLoaded.current = false;
    };
  }, [propertyId, widgetId, onLoad, onStatusChange, onChatMaximized, onChatMinimized, onChatHidden, onChatStarted, onChatEnded, customization]);

  // This component doesn't render anything visible
  return null;
};

export default TawkToChat;