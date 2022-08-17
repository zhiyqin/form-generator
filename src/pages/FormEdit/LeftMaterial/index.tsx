import './index.less';
import { PartitionOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import {
  inputComponents,
  SelectComponent,
  LayoutComponents,
} from '@/schema/config';
import { useDispatch } from '@/models';
import { cloneDeep } from 'lodash';

function LeftMaterial() {
  const { form } = useDispatch();
  const handleAddMaterial = (item: any) => {
    item.itemSchem = {
      ...item.itemSchem,
      name: uuidv4(),
    };
    form.addFormItem(cloneDeep(item));
  };
  return (
    <div className="left-material">
      <div className="header">From Generator</div>
      <div className="cantanier">
        <div className="cantanier-type">
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
                  {item.itemSchem.label}
                </div>
              );
            })}
          </div>
        </div>
        <div className="cantanier-type">
          <p className="material-title">
            <PartitionOutlined className="icon" />
            选择型组件
          </p>
          <div className="material-catianer">
            {SelectComponent.map((item, index) => {
              return (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className="item"
                  onClick={() => handleAddMaterial(item)}
                >
                  {item.itemSchem.label}
                </div>
              );
            })}
          </div>
        </div>
        <div className="cantanier-type">
          <p className="material-title">
            <PartitionOutlined className="icon" />
            布局型组件
          </p>
          <div className="material-catianer">
            {LayoutComponents.map((item, index) => {
              return (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className="item"
                  onClick={() => handleAddMaterial(item)}
                >
                  {item.itemSchem.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftMaterial;
