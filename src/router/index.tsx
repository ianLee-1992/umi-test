import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '../pages/login';
import DashboardPage from '../pages/admin/dashboard';
import UsersPage from '../pages/admin/users';
import SettingsPage from '../pages/admin/settings';
import AdminLayout from '../components/layout/AdminLayout';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import PublicRoute from '../components/auth/PublicRoute';

const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/admin',
        element: <AdminLayout />,
        children: [
          {
            path: 'dashboard',
            element: <DashboardPage />,
          },
          {
            path: 'users',
            element: <UsersPage />,
          },
          {
            path: 'settings',
            element: <SettingsPage />,
          },
          {
            path: '',
            element: <Navigate to="dashboard" replace />,
          },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);

export default router;
