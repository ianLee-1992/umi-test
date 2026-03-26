import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

// 公开路由（已登录用户自动跳转）
const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  return <Outlet />;
};

export default PublicRoute;
