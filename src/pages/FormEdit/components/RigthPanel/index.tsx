import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useState } from 'react';
import './index.less';
import SetComponent from './components/SetComponent';
import SetForm from './components/SetForm';

function RightPanel() {
  const [currentMenu, setCurrent] = useState('item');
  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
  };
  return (
    <div className="right-panel">
      <Menu mode="horizontal" defaultSelectedKeys={['item']} onClick={onClick}>
        <Menu.Item key="item">组件属性</Menu.Item>
        <Menu.Item key="form">表单属性</Menu.Item>
      </Menu>
      {currentMenu === 'item' ? <SetComponent /> : <SetForm />}
    </div>
  );
}

export default RightPanel;
