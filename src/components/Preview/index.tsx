import { Button, Drawer, Space, Form } from 'antd';
import { useSelector, useDispatch } from '@/models';
import RenderItem from '@/pages/FormEdit/components/CenterRender/Render';
const PreviewDraw = (props: any) => {
  const { showPreview, onClose } = props;
  const { form } = useSelector(state => state);
  const { formSchema, children } = form;
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
      <Form className="render-container" {...formSchema}>
        {children?.map((item: any, index: number) => (
          <RenderItem schema={item} key={index} />
        ))}
      </Form>
    </Drawer>
  );
};

export default PreviewDraw;
