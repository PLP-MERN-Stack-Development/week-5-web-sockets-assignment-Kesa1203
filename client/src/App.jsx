import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';
import { SocketProvider } from './contexts/SocketContext.jsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import ChatRoom from './components/Chat/ChatRoom.jsx';
import ProtectedRoute from './components/Common/ProtectedRoute.jsx';

function AppWrapper() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading user...</div>;

  return (
    <SocketProvider token={user?.accessToken} userId={user?.uid} username={user?.email}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Optional: Redirect from root to /chat */}
        <Route path="/" element={<Navigate to="/chat" />} />

        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatRoom />
            </ProtectedRoute>
          }
        />
        
        {/* Optional: catch-all 404 route */}
        <Route path="*" element={<Navigate to="/chat" />} />
      </Routes>
    </SocketProvider>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </AuthProvider>
  );
}
