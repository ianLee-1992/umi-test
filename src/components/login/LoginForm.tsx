import { useState } from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface LoginFormProps {
  onLoginSuccess: (username: string, password: string) => void;
}

const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: { username: string; password: string }) => {
    setLoading(true);
    try {
      // 模拟登录请求延迟
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // 调用父组件的登录处理
      onLoginSuccess(values.username, values.password);
    } catch {
      message.error('登录失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      title={
        <div style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
          管理后台登录
        </div>
      }
      style={{ 
        width: 400,
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        borderRadius: 8,
      }}
    >
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        size="large"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input 
            prefix={<UserOutlined />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            loading={loading}
            style={{ width: '100%' }}
          >
            登录
          </Button>
        </Form.Item>
        <div style={{ textAlign: 'center', color: '#999', fontSize: 12 }}>
          默认账号：admin / admin
        </div>
      </Form>
    </Card>
  );
};

export default LoginForm;
