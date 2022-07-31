import { Button, Drawer, Space, Form } from 'antd';
import { useSelector, useDispatch } from '@/models';
import RenderItem from '@/pages/FormEdit/components/CenterRender/Render';
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
      <Form className="render-container" {...formSchema} onFinish={onFinishs}>
        {children?.map((item: any, index: number) => (
          <RenderItem schema={item} key={index} />
        ))}
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default PreviewDraw;
