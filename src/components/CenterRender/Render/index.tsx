import { Form, Input } from 'antd';

function RenderItem(props: any) {
  const { schema = {} } = props;
  const { itemSchem, controlSchema } = schema;
  return (
    <Form.Item {...itemSchem}>
      <Input {...controlSchema} />
    </Form.Item>
  );
}

export default RenderItem;
