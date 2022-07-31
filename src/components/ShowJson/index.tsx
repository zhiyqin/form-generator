import { Button, Drawer, Space, Form } from 'antd';
import { useSelector, useDispatch } from '@/models';
import { useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

const ShowJson = (props: any) => {
  const { visible, onClose } = props;
  const { form } = useSelector(state => state);
  const {
    form: { SetFormWithJSON },
  } = useDispatch();
  const [showCode, setCode] = useState('');
  // 存储修改的JSON
  const [saveData, setSaveData] = useState('');
  function onChangeHandle(value: any) {
    setCode(value);
  }
  useEffect(() => {
    const schema = JSON.stringify(form, null, '\t');
    setCode(schema);
  }, [form]);
  const handleSave = () => {
    SetFormWithJSON(JSON.parse(showCode));
    onClose && onClose();
  };
  return (
    <Drawer
      title="查看JSON并支持修改"
      placement="right"
      width={'50%'}
      onClose={onClose}
      visible={visible}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={handleSave}>
            保存
          </Button>
        </Space>
      }
    >
      <MonacoEditor
        width="100vw"
        height={window.innerHeight - 16}
        language="typescript"
        theme="vs-dark"
        value={showCode}
        onChange={onChangeHandle}
        options={{
          selectOnLineNumbers: true,
          matchBrackets: 'near',
        }}
      />
    </Drawer>
  );
};

export default ShowJson;
