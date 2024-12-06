import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import { CLERK_CONFIG } from '../../../config/clerk.config';
import { ENV } from '../../../config/env.config';

export const AuthProvider = ({ children }) => {
  if (!ENV.CLERK_PUBLISHABLE_KEY) {
    console.error('Missing Clerk publishable key');
    return null;
  }

  return (
    <ClerkProvider
      publishableKey={ENV.CLERK_PUBLISHABLE_KEY}
      appearance={CLERK_CONFIG.appearance}
    >
      {children}
    </ClerkProvider>
  );
};