import { Table, Button, Space, Typography, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

const UsersPage = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      render: () => (
        <Space size="middle">
          <Button type="primary" size="small">
            编辑
          </Button>
          <Button danger size="small">
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      id: '1',
      username: 'admin',
      email: 'admin@example.com',
      role: '管理员',
    },
    {
      key: '2',
      id: '2',
      username: 'user1',
      email: 'user1@example.com',
      role: '普通用户',
    },
    {
      key: '3',
      id: '3',
      username: 'user2',
      email: 'user2@example.com',
      role: '普通用户',
    },
    {
      key: '4',
      id: '4',
      username: 'user3',
      email: 'user3@example.com',
      role: '普通用户',
    },
    {
      key: '5',
      id: '5',
      username: 'editor',
      email: 'editor@example.com',
      role: '编辑',
    },
  ];

  return (
    <div>
      <Title level={4}>用户管理</Title>
      <Card>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" icon={<PlusOutlined />}>
            添加用户
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
};

export default UsersPage;
