import { Button } from 'antd';
import {
  RightCircleOutlined,
  EyeOutlined,
  VerticalAlignBottomOutlined,
  CopyOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

function Header() {
  return (
    <div className="header">
      <Button type="link">
        <RightCircleOutlined />
        运行
      </Button>
      <Button type="link">
        <EyeOutlined />
        查看
      </Button>
      <Button type="link">
        <VerticalAlignBottomOutlined />
        导出React文件
      </Button>
      <Button type="link">
        <CopyOutlined />
        复制代码
      </Button>
      <Button type="link" danger>
        <DeleteOutlined />
        清空
      </Button>
    </div>
  );
}
export default Header;
