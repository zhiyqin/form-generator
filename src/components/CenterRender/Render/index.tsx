import { Form, Input } from 'antd';

function RenderItem(itemProps: any) {
  const { schema = {} } = itemProps;
  console.log('schema', schema);
  const { componentProps, rules, _selfConfig_ } = schema;
  return (
    <Form.Item
      label={_selfConfig_.label}
      required={_selfConfig_.required}
      name="username"
      rules={[...rules.regList]}
    >
      <Input {...componentProps} />
    </Form.Item>
  );
}

export default RenderItem;
