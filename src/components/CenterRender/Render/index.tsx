import { Form, Input } from 'antd';

function RenderItem(props: any) {
  const { schema = {} } = props;
  const { itemSchem, componentSchema } = schema;
  console.log('schema', schema);
  return (
    <Form.Item {...itemSchem}>
      <Input {...componentSchema} />
    </Form.Item>
  );
}

export default RenderItem;
