import { useSelector, useDispatch } from '@/models';
import { Button, Checkbox, Form, Input, Select, Radio } from 'antd';
import './index.less';
import { Children, useEffect } from 'react';

function SetForm() {
  const [formSet] = Form.useForm();
  const {
    form: { formSchema, children },
  } = useSelector(state => state);
  const {
    form: { setFormProperty },
  } = useDispatch();

  useEffect(() => {
    formSet.setFieldsValue(formSchema);
  }, [formSchema]);
  const onFieldsChanged = (fields: any) => {
    // 要修改的字段是那个
    const key = fields[0]?.name[0];
    const value = fields[0].value;
    Object.assign(formSchema, { [key]: value });
    console.log('设置表单属性', formSchema);
    setFormProperty(formSchema);
  };
  return (
    <div>
      {children.length > 0 && (
        <div className="set-form">
          <Form
            colon={false}
            labelAlign="right"
            labelCol={{
              span: 6,
            }}
            form={formSet}
            labelWrap
            onFieldsChange={(changedFields: any) => {
              onFieldsChanged(changedFields);
            }}
          >
            <Form.Item label="表单名称" name="name">
              <Input />
            </Form.Item>
            <Form.Item name="size" label="表单尺寸">
              <Radio.Group>
                <Radio.Button value="small">迷你</Radio.Button>
                <Radio.Button value="middle">中等</Radio.Button>
                <Radio.Button value="large">较大</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="layout" label="表单布局">
              <Radio.Group>
                <Radio.Button value="horizontal">horizontal</Radio.Button>
                <Radio.Button value="vertical">Vertical</Radio.Button>
                {/* <Radio.Button value="Inline">Inline</Radio.Button> */}
              </Radio.Group>
            </Form.Item>
            <Form.Item name="labelAlign" label="标签对齐">
              <Radio.Group>
                <Radio.Button value="left">left</Radio.Button>
                <Radio.Button value="right">right</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="是否禁用" name="disabled">
              <Radio.Group>
                <Radio value={true}>是</Radio>
                <Radio value={false}>否</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="显示冒号" name="colon">
              <Radio.Group>
                <Radio value={true}>是</Radio>
                <Radio value={false}>否</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="标签换行" name="labelWrap">
              <Radio.Group>
                <Radio value={true}>是</Radio>
                <Radio value={false}>否</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
}

export default SetForm;
