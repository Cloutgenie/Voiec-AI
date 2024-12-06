import { useState, useEffect } from 'react';

const mockUser = {
  id: 'mock-user-123',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  imageUrl: 'https://ui-avatars.com/api/?name=John+Doe'
};

export const useAuth = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedAuth = localStorage.getItem('mockAuth');
    if (savedAuth) {
      setIsSignedIn(true);
      setUser(mockUser);
    }
    setIsLoaded(true);
  }, []);

  const signIn = () => {
    localStorage.setItem('mockAuth', 'true');
    setIsSignedIn(true);
    setUser(mockUser);
  };

  const signOut = () => {
    localStorage.removeItem('mockAuth');
    setIsSignedIn(false);
    setUser(null);
  };

  return {
    isLoaded,
    isSignedIn,
    user,
    signIn,
    signOut
  };
};