
import React from 'react';
import { usePrivy } from '@privy-io/react-auth';

const ProtectedRoute = ({ children }) => {
  const { authenticated, ready, isLoading } = usePrivy();

  if (!ready || isLoading) {
    return null; 
    }

  if (!authenticated) {
    return <div style={{textAlign: 'center', marginTop: '2rem'}}>Please log in to access this page.</div>;
  }

  return children;
};

export default ProtectedRoute;