import {
  Button,
  Form,
  Input,
  Radio,
  Popover,
  Select,
  Space,
  Table,
  Tag,
} from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { ruleType, showTitleMap } from './constant';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function AddRule(props: any) {
  const { setItemRules } = props;
  const [rules, setRules] = useState([] as any);
  const [currentRule, setCurrentRule] = useState(null);
  const [currentIndex, setCurrentIndex] = useState();
  const [showRulePopover, setShowRulePopover] = useState(false);
  const handleVisibleChange = (newVisible: boolean) => {
    setShowRulePopover(newVisible);
  };
  const addRules = (value: any) => {
    setShowRulePopover(false);
    if (!value.type) return;
    if (currentIndex !== undefined) {
      rules.splice(currentIndex, 1, value);
      return setRules([...rules]);
    }
    setRules([...rules, value]);
  };
  const dealWithRule = (rules: any) => {
    const result: { [x: string]: any; message: any }[] = [];
    rules.map((item: any) => {
      result.push({
        [item.type]: item.value,
        message: item.message,
      });
    });
    return result;
  };
  useEffect(() => {
    const saveRules = dealWithRule(rules);
    saveRules.length && setItemRules(saveRules, 'rules');
  }, [rules]);
  const columns = [
    {
      title: '类型',
      key: 'type',
      dataIndex: 'type',
      render: (_: any, record: any) => {
        const type = record?.type;
        return <Space size="middle">{showTitleMap[type]}</Space>;
      },
    },
    {
      title: '操作',
      key: 'action',
      dataIndex: 'action',
      render: (all: any, record: any, index: number) => (
        <Space size="middle">
          <a onClick={() => editRules(record, index)}>
            <EditOutlined />
          </a>
          <a>
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ];
  const editRules = (item: any, index: any) => {
    setShowRulePopover(true);
    setCurrentIndex(index);
    setCurrentRule(item);
  };
  const handleAddPopover = () => {
    setCurrentRule(null);
    setCurrentIndex(undefined);
  };
  return (
    <div>
      <Popover
        style={{ minWidth: '200px' }}
        content={
          <AddRuleContent
            addRules={addRules}
            vidible={showRulePopover}
            editRule={currentRule}
          />
        }
        title="添加校验规则"
        trigger="click"
        visible={showRulePopover}
        onVisibleChange={handleVisibleChange}
        destroyTooltipOnHide
      >
        <Button type="link" onClick={handleAddPopover}>
          <PlusCircleOutlined />
          添加规则
        </Button>
      </Popover>
      <div>
        <Table columns={columns} dataSource={rules}></Table>
      </div>
    </div>
  );
}

function AddRuleContent(props: any) {
  const { addRules, editRule = {} } = props;
  return (
    <div>
      <Form
        colon={false}
        labelAlign="right"
        labelCol={{
          span: 6,
        }}
        labelWrap
        onFieldsChange={(changedFields: any) => {
          console.log('changedFields', changedFields);
        }}
        initialValues={editRule}
        onFinish={value => addRules(value)}
      >
        <Form.Item label="类型" name="type">
          <Select options={ruleType}></Select>
        </Form.Item>
        <Form.Item label="数值或代码" name="value">
          <Input />
        </Form.Item>
        <Form.Item label="错误提示" name="message">
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 8, offset: 16 },
          }}
        >
          <Button type="link" htmlType="submit">
            确定
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddRule;
