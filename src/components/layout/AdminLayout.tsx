import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  Layout,
  Menu,
  Avatar,
  Dropdown,
  Breadcrumb,
  Space,
  Typography,
  theme,
} from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { useAuth } from '../../hooks/useAuth';

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

// 菜单配置
const menuItems = [
  {
    key: '/admin/dashboard',
    icon: <DashboardOutlined />,
    label: '仪表盘',
  },
  {
    key: '/admin/users',
    icon: <UserOutlined />,
    label: '用户管理',
  },
  {
    key: '/admin/settings',
    icon: <SettingOutlined />,
    label: '系统设置',
  },
];

// 面包屑映射
const breadcrumbMap: Record<string, string> = {
  '/admin': '首页',
  '/admin/dashboard': '仪表盘',
  '/admin/users': '用户管理',
  '/admin/settings': '系统设置',
};

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // 生成面包屑项
  const generateBreadcrumbItems = () => {
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    const items: { title: string; onClick?: () => void; className?: string }[] = [
      {
        title: '首页',
        onClick: () => navigate('/admin/dashboard'),
        className: 'breadcrumb-link',
      },
    ];

    let currentPath = '';
    pathSnippets.forEach((snippet) => {
      currentPath += `/${snippet}`;
      if (breadcrumbMap[currentPath] && currentPath !== '/admin') {
        items.push({
          title: breadcrumbMap[currentPath],
        });
      }
    });

    return items;
  };

  // 用户下拉菜单项
  const userDropdownItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人设置',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '系统设置',
    },
    {
      type: 'divider' as const,
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      danger: true,
    },
  ];

  // 处理用户下拉菜单点击
  const handleUserMenuClick = ({ key }: { key: string }) => {
    if (key === 'logout') {
      logout();
      navigate('/login');
    } else if (key === 'profile') {
      navigate('/admin/settings');
    } else if (key === 'settings') {
      navigate('/admin/settings');
    }
  };

  // 处理菜单点击
  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      {/* 左侧侧边栏 */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        style={{
          boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
          zIndex: 10,
        }}
      >
        {/* Logo 区域 */}
        <div
          style={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid #f0f0f0',
          }}
        >
          <Space>
            <DashboardOutlined style={{ fontSize: 24, color: '#1890ff' }} />
            {!collapsed && (
              <Text strong style={{ fontSize: 18 }}>
                管理后台
              </Text>
            )}
          </Space>
        </div>

        {/* 菜单 */}
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          style={{ borderRight: 0 }}
        />
      </Sider>

      <Layout>
        {/* 顶部头部 */}
        <Header
          style={{
            padding: '0 24px',
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            zIndex: 9,
          }}
        >
          {/* 左侧：折叠按钮 */}
          <div
            style={{
              cursor: 'pointer',
              fontSize: 18,
              color: '#666',
            }}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>

          {/* 右侧：用户信息 */}
          <Dropdown
            menu={{ items: userDropdownItems, onClick: handleUserMenuClick }}
            placement="bottomRight"
          >
            <Space style={{ cursor: 'pointer' }}>
              <Avatar
                style={{ backgroundColor: '#1890ff' }}
                icon={<UserOutlined />}
              />
              <Text>{user?.username || '管理员'}</Text>
              <DownOutlined style={{ fontSize: 12, color: '#999' }} />
            </Space>
          </Dropdown>
        </Header>

        {/* 面包屑导航 */}
        <div
          style={{
            padding: '16px 24px 0',
            background: '#f5f5f5',
          }}
        >
          <Breadcrumb items={generateBreadcrumbItems()} />
        </div>

        {/* 内容区域 */}
        <Content
          style={{
            margin: 16,
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: 'auto',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
