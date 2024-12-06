import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import { CLERK_CONFIG } from '../../config/clerk.config';
import { ENV } from '../../config/env.config';

export const AuthProvider = ({ children }) => {
  return (
    <ClerkProvider
      publishableKey={ENV.CLERK_PUBLISHABLE_KEY}
      appearance={CLERK_CONFIG.appearance}
    >
      {children}
    </ClerkProvider>
  );
};