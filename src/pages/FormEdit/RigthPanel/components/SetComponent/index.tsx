import './index.less';
import { useSelector, useDispatch } from '@/models';
import { Form, Input, Radio } from 'antd';
import { useEffect } from 'react';
import AddRule from '../AddRule';
import RenderForm from '@/components/renderFrom';
import { InputTypeProps, FormCommonProps } from '@/schema/propsConfig';

function SetComponent() {
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
  const onFieldsChanged = (fields: any, type: string) => {
    if (type === 'rules') {
      Object.assign(current, { rules: [...fields] });
      children.splice(currentSelected, 1, current);
      return refreshFormList(children);
    } else {
      const result = (current as any)[type];
      // 要修改的字段是那个
      const key = fields[0]?.name[0];
      const value = fields[0]?.value;
      if (result) {
        result[key] = value;
      }
      Object.assign(current, { [type]: result });
      children.splice(currentSelected, 1, current);
      refreshFormList(children);
    }
  };
  return (
    <div>
      {children.length > 0 && (
        <div className="set-component">
          <div className="container">
            <RenderForm
              formSchema={FormCommonProps}
              form={formScope}
              onFieldsChange={(changedFields: any) => {
                onFieldsChanged(changedFields, 'itemSchem');
              }}
              itemConfig={InputTypeProps}
            />
            <div className="title">正则校验</div>
            <AddRule setItemRules={onFieldsChanged} />
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
              {/* TODO: delete */}
              <Form.Item label="绑定事件" name="placeholder">
                <Input />
              </Form.Item>
              <Form.Item label="占位提示" name="placeholder">
                <Input />
              </Form.Item>
              <Form.Item label="内容最大长度" name="maxLength">
                <Input type="number" />
              </Form.Item>
              <Form.Item label="前缀" name="prefix">
                <Input />
              </Form.Item>
              <Form.Item label="后缀" name="suffix">
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

export default SetComponent;
