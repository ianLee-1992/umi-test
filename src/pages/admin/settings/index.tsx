import {
  Form,
  Input,
  Button,
  Select,
  Switch,
  Typography,
  Card,
  message,
} from 'antd';
import { SaveOutlined } from '@ant-design/icons';

const { Title } = Typography;

const SettingsPage = () => {
  const [form] = Form.useForm();

  interface SettingsFormValues {
    siteName: string;
    siteDescription?: string;
    siteStatus: boolean;
    theme: string;
  }

  const onFinish = (values: SettingsFormValues) => {
    console.log('Success:', values);
    message.success('设置保存成功');
  };

  return (
    <div>
      <Title level={4}>系统设置</Title>
      <Card style={{ maxWidth: 600 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            siteName: '管理后台',
            siteDescription: '一个基于 Ant Design 的管理后台',
            siteStatus: true,
            theme: 'light',
          }}
        >
          <Form.Item
            label="站点名称"
            name="siteName"
            rules={[{ required: true, message: '请输入站点名称' }]}
          >
            <Input placeholder="请输入站点名称" />
          </Form.Item>
          <Form.Item label="站点描述" name="siteDescription">
            <Input.TextArea rows={4} placeholder="请输入站点描述" />
          </Form.Item>
          <Form.Item label="站点状态" name="siteStatus" valuePropName="checked">
            <Switch checkedChildren="开启" unCheckedChildren="关闭" />
          </Form.Item>
          <Form.Item label="主题" name="theme">
            <Select
              options={[
                { value: 'light', label: '浅色' },
                { value: 'dark', label: '深色' },
              ]}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
              保存设置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SettingsPage;
