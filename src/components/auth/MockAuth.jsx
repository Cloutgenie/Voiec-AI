import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const MockSignIn = ({ redirectUrl = '/dashboard' }) => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn();
    navigate(redirectUrl);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Sign In</h2>
        <p className="mt-2 text-white/80">Welcome back to Voice AI</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white/80">Email</label>
          <input
            type="email"
            defaultValue="demo@example.com"
            className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/40"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white/80">Password</label>
          <input
            type="password"
            defaultValue="demo123"
            className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/40"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export const MockSignUp = ({ redirectUrl = '/dashboard' }) => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn();
    navigate(redirectUrl);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Create Account</h2>
        <p className="mt-2 text-white/80">Get started with Voice AI</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white/80">First Name</label>
            <input
              type="text"
              defaultValue="Demo"
              className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/40"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80">Last Name</label>
            <input
              type="text"
              defaultValue="User"
              className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/40"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80">Email</label>
          <input
            type="email"
            defaultValue="demo@example.com"
            className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/40"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white/80">Password</label>
          <input
            type="password"
            defaultValue="demo123"
            className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/40"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export const MockUserButton = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  return (
    <div className="relative group">
      <button
        onClick={handleSignOut}
        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
      >
        <img
          src={user?.imageUrl || 'https://ui-avatars.com/api/?name=Demo+User'}
          alt={user?.firstName || 'Demo User'}
          className="w-8 h-8 rounded-full"
        />
        <span>{user?.firstName || 'Demo User'}</span>
      </button>
    </div>
  );
};