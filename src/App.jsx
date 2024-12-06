import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ErrorBoundary from './components/common/ErrorBoundary';
import { VapiProvider } from './contexts/VapiContext';

function App() {
  return (
    <ErrorBoundary>
      <VapiProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </VapiProvider>
    </ErrorBoundary>
  );
}

export default App;