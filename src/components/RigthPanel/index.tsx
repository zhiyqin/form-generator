import './index.less';
import { Button, Checkbox, Form, Input, Select } from 'antd';

function RightPanel() {
  return (
    <div className="right-panel">
      <div className="header">属性面板</div>
      <div className="container">
        <Form colon={false} labelAlign="right">
          <Form.Item label="组件类型" name="compoentType">
            <Select />
          </Form.Item>
          <Form.Item label="字段名" name="username">
            <Input />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default RightPanel;
