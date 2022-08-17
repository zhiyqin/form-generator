import { Button, Drawer, Space, Form } from 'antd';
import { useSelector } from '@/models';
import RenderForm from '../renderFrom';
const PreviewDraw = (props: any) => {
  const { showPreview, onClose } = props;
  const { form } = useSelector(state => state);
  const { formSchema, children } = form;
  const onFinishs = (values: any) => {
    console.log('Success:', values, form);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Drawer
      title="预览表单"
      placement="right"
      width={'50%'}
      onClose={onClose}
      visible={showPreview}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={onClose}>
            OK
          </Button>
        </Space>
      }
    >
      <RenderForm
        className="render-container"
        onFinish={onFinishs}
        formSchema={formSchema}
        itemConfig={children}
      >
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </RenderForm>
    </Drawer>
  );
};

export default PreviewDraw;
