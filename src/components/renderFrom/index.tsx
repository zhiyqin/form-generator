import { Button, Drawer, Space, Form } from 'antd';
import RenderItem from './renderItem';

export default function RenderForm({
  formSchema,
  itemConfig,
  children,
  ...args
}) {
  return (
    <Form {...formSchema} {...args}>
      {itemConfig?.map((item: any, index: number) => (
        <RenderItem schema={item} key={index} />
      ))}
      {children}
    </Form>
  );
}
