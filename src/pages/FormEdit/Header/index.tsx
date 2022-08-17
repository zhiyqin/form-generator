import { Button } from 'antd';
import {
  RightCircleOutlined,
  EyeOutlined,
  VerticalAlignBottomOutlined,
  CopyOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import PreviewDraw from '@/components/Preview';
import ShowJson from '@/components/ShowJson';
import { useState } from 'react';

function Header() {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [jsonVisible, setJsonVisible] = useState(false);
  const handleShowPreview = () => {
    setPreviewVisible(true);
  };
  const onPreviewClose = () => {
    setPreviewVisible(false);
  };
  const handleShowJson = () => {
    setJsonVisible(true);
  };
  const onJsonClose = () => {
    setJsonVisible(false);
  };
  return (
    <div>
      <div className="header">
        <Button type="link" onClick={handleShowPreview}>
          <RightCircleOutlined />
          预览
        </Button>
        <Button type="link" onClick={handleShowJson}>
          <EyeOutlined />
          修改JSON
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
      <PreviewDraw showPreview={previewVisible} onClose={onPreviewClose} />
      <ShowJson visible={jsonVisible} onClose={onJsonClose} />
    </div>
  );
}
export default Header;
