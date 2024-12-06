export const VAPI_CONFIG = {
  apiKey: 'mock-vapi-key',
  assistantId: 'mock-assistant-id',
  options: {
    transcriber: {
      provider: "deepgram",
      model: "nova-2",
      language: "en-US"
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant focused on providing excellent customer service."
        }
      ],
      temperature: 0.7,
      maxTokens: 1000
    },
    voice: {
      provider: "playht",
      voiceId: "jennifer"
    }
  }
};

export const VAPI_UI_CONFIG = {
  button: {
    position: "bottom-right",
    offset: "40px",
    width: "50px",
    height: "50px",
    idle: {
      color: "#6d28d9",
      type: "pill",
      title: "Have a question?",
      subtitle: "Chat with our AI assistant",
      icon: "/voice.svg"
    },
    active: {
      color: "#4c1d95",
      type: "pill",
      title: "Chatting with AI",
      subtitle: "Click to minimize",
      icon: "/voice.svg"
    }
  },
  chat: {
    theme: {
      primary: "#6d28d9",
      secondary: "#4c1d95",
      background: "#ffffff",
      text: "#1f2937"
    },
    header: {
      title: "Voice AI Assistant",
      subtitle: "24/7 Support",
      showAvatar: true
    }
  }
};