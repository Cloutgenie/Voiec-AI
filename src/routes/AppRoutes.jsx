import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MockSignIn, MockSignUp } from '../components/auth/MockAuth';
import LandingPage from '../components/LandingPage';
import DashboardLayout from '../components/dashboard/layout/DashboardLayout';
import AdminDashboard from '../components/dashboard/AdminDashboard';
import StaffDashboard from '../components/dashboard/StaffDashboard';
import Analytics from '../components/dashboard/Analytics';
import Settings from '../components/dashboard/Settings';
import AssistantsList from '../components/dashboard/AssistantsList';
import AuthLayout from '../components/auth/AuthLayout';
import LoadingScreen from '../components/common/LoadingScreen';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route 
          path="/sign-in" 
          element={
            <AuthLayout>
              <MockSignIn redirectUrl="/dashboard" />
            </AuthLayout>
          } 
        />
        
        <Route 
          path="/sign-up" 
          element={
            <AuthLayout>
              <MockSignUp redirectUrl="/dashboard" />
            </AuthLayout>
          } 
        />
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <AdminDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/staff-dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <StaffDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Analytics />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/assistants"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <AssistantsList />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Settings />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;