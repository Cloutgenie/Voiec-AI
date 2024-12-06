export const CLERK_CONFIG = {
  appearance: {
    baseTheme: undefined,
    variables: {
      colorPrimary: '#6d28d9',
      colorText: '#ffffff',
      colorBackground: 'transparent',
      colorInputBackground: 'rgba(255, 255, 255, 0.1)',
      colorInputText: '#ffffff',
      colorInputBorder: 'rgba(255, 255, 255, 0.2)',
      fontFamily: 'Inter, sans-serif',
    },
    elements: {
      formButtonPrimary: 
        'bg-purple-600 hover:bg-purple-700 transition-colors text-white',
      card: 'bg-transparent',
      headerTitle: 'text-2xl font-bold text-white',
      dividerLine: 'bg-white/20',
      dividerText: 'text-white/60',
      formFieldLabel: 'text-white/80',
      formFieldInput: 
        'bg-white/10 border-white/20 text-white placeholder-white/40 focus:border-purple-500 focus:ring-purple-500',
      footerActionLink: 'text-purple-300 hover:text-purple-200',
      socialButtonsIconButton: 
        'border-white/20 hover:border-purple-500 text-white',
      socialButtonsBlockButton: 
        'border-white/20 hover:border-purple-500 text-white',
      formFieldInputShowPasswordButton: 'text-white/60 hover:text-white',
      identityPreviewText: 'text-white',
      identityPreviewEditButton: 'text-purple-300 hover:text-purple-200',
    },
    layout: {
      showOptionalFields: false,
      socialButtonsPlacement: "bottom",
      socialButtonsVariant: "iconButton"
    }
  }
};