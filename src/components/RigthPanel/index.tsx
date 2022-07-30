import './index.less';
import { useSelector, useDispatch } from '@/models';
import { Button, Checkbox, Form, Input, Select, Radio } from 'antd';
import { useEffect } from 'react';

function RightPanel() {
  const {
    form: { children, currentSelected },
  } = useSelector(state => state);
  const current = children[currentSelected] || {};
  const [formScope] = Form.useForm();
  const [formcontrol] = Form.useForm();
  const {
    form: { refreshFormList },
  } = useDispatch();

  useEffect(() => {
    getFormInitValue();
  }, [children.length, currentSelected]);
  // 获取当前表单的初始值
  const getFormInitValue = () => {
    const { itemSchem = {}, controlSchema = {} } = current || {};
    formScope.setFieldsValue({ ...itemSchem });
    formcontrol.setFieldsValue({ ...controlSchema });
  };
  const onFieldsChanged = (changedFields: any, type: string) => {
    const result = (current as any)[type];
    // 要修改的字段是那个
    const key = changedFields[0]?.name[0];
    const value = changedFields[0].value;
    if (result) {
      result[key] = value;
    }
    Object.assign(current, { [type]: result });
    children.splice(currentSelected, 1, current);
    refreshFormList(children);
  };
  return (
    <div>
      {children.length && (
        <div className="right-panel">
          <div className="header">组件属性修改</div>
          <div className="container">
            <div className="title">设置表单字段属性</div>
            <Form
              colon={false}
              labelAlign="right"
              labelCol={{
                span: 6,
              }}
              form={formScope}
              labelWrap
              onFieldsChange={(changedFields: any) => {
                onFieldsChanged(changedFields, 'itemSchem');
              }}
            >
              <Form.Item label="字段名" name="name">
                <Input />
              </Form.Item>
              <Form.Item label="标题" name="label">
                <Input />
              </Form.Item>
              <Form.Item label="是否必填" name="required">
                <Radio.Group>
                  <Radio value={true}>是</Radio>
                  <Radio value={false}>否</Radio>
                </Radio.Group>
              </Form.Item>
            </Form>
            <div className="title">设置控件属性</div>
            <Form
              colon={false}
              labelAlign="right"
              labelCol={{
                span: 6,
              }}
              labelWrap
              form={formcontrol}
              onFieldsChange={(changedFields: any) => {
                onFieldsChanged(changedFields, 'controlSchema');
              }}
            >
              <Form.Item label="占位提示" name="placeholder">
                <Input />
              </Form.Item>
              <Form.Item label="内容最大长度" name="maxLength">
                <Input />
              </Form.Item>
              <Form.Item label="能否清空" name="allowClear">
                <Radio.Group>
                  <Radio value={true}>是</Radio>
                  <Radio value={false}>否</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="是否只读" name="readOnly">
                <Radio.Group>
                  <Radio value={true}>是</Radio>
                  <Radio value={false}>否</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="是否禁用" name="disabled">
                <Radio.Group>
                  <Radio value={true}>是</Radio>
                  <Radio value={false}>否</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="是否展示字数" name="showCount">
                <Radio.Group>
                  <Radio value={true}>是</Radio>
                  <Radio value={false}>否</Radio>
                </Radio.Group>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RightPanel;
