import { Card, Statistic, Row, Col, Typography } from 'antd';
import {
  UserOutlined,
  EyeOutlined,
  UserAddOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const DashboardPage = () => {
  return (
    <div>
      <Title level={4}>仪表盘</Title>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="用户总数"
              value={1000}
              suffix="人"
              prefix={<UserOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="今日访问"
              value={123}
              suffix="次"
              prefix={<EyeOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="今日注册"
              value={23}
              suffix="人"
              prefix={<UserAddOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="系统状态"
              value={99.9}
              suffix="%"
              prefix={<CheckCircleOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={12}>
          <Card title="最近活动">
            <p>暂无最新活动</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="系统公告">
            <p>欢迎使用管理后台系统！</p>
            <p>默认登录账号：admin / admin</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
