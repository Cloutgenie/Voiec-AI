const requiredEnvVars = [
  'VITE_CLERK_PUBLISHABLE_KEY',
  'VITE_VAPI_API_KEY',
  'VITE_VAPI_ASSISTANT_ID'
];

const validateEnv = () => {
  const missingVars = requiredEnvVars.filter(
    varName => !import.meta.env[varName]
  );

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }
};

validateEnv();

export const ENV = {
  CLERK_PUBLISHABLE_KEY: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
  VAPI_API_KEY: import.meta.env.VITE_VAPI_API_KEY,
  VAPI_ASSISTANT_ID: import.meta.env.VITE_VAPI_ASSISTANT_ID,
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000'
};