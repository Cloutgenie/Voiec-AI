export const VAPI_CONFIG = {
  position: 'bottom-right',
  theme: {
    button: {
      backgroundColor: '#6d28d9',
      right: '20px',
      bottom: '20px',
    },
    chat: {
      headerBackground: '#6d28d9',
      userMessage: '#f3f4f6',
      botMessage: '#6d28d9',
    },
  },
};

export const loadVapiScript = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js';
    script.defer = true;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};