import './index.less';
import { PartitionOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { inputComponents } from '@/schema/config';
import { useDispatch } from '@/models';

function LeftMaterial() {
  const { form } = useDispatch();
  const handleAddMaterial = (item: any) => {
    item.name = uuidv4();
    form.addFormItem({ ...item });
  };
  return (
    <div className="left-material">
      <div className="header">From Generator</div>
      <div className="cantanier">
        <div>
          <p className="material-title">
            <PartitionOutlined className="icon" />
            输入型组件
          </p>
          <div className="material-catianer">
            {inputComponents.map((item, index) => {
              return (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className="item"
                  onClick={() => handleAddMaterial(item)}
                >
                  {item._selfConfig_.label}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className="material-title">
            <PartitionOutlined className="icon" />
            选择型组件
          </p>
        </div>
        <div>
          <p className="material-title">
            <PartitionOutlined className="icon" />
            布局型组件
          </p>
        </div>
      </div>
    </div>
  );
}
export default LeftMaterial;
