import { Form, Input } from 'antd';

function RenderItem(props: any) {
  const { schema = {} } = props;
  const { itemSchem, controlSchema, rules } = schema;
  return (
    <Form.Item {...itemSchem} rules={[...rules]}>
      <Input type="number" {...controlSchema} />
    </Form.Item>
  );
}

export default RenderItem;
