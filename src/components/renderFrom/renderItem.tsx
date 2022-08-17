import { Form } from 'antd';
import { getComponentByType } from '@/utils';

function RenderItem(props: any) {
  const { schema = {} } = props;
  const {
    itemSchem,
    controlSchema,
    rules = [],
    tag,
    children,
    eventProps,
  } = schema;
  return (
    <Form.Item {...itemSchem} rules={[...rules]}>
      {getComponentByType({ tag, controlSchema, children, eventProps })}
    </Form.Item>
  );
}

export default RenderItem;
