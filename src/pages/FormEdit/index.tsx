import CenterRender from './CenterRender';
import RightPanel from './RigthPanel';
import LeftMaterial from './LeftMaterial';
import { Provider } from 'react-redux';
import store from '@/models';

import './index.less';
/**
 * 表单编辑器页面
 */
function FormEdit() {
  return (
    <Provider store={store}>
      <div className="form-edit">
        <LeftMaterial />
        <CenterRender />
        <RightPanel />
      </div>
    </Provider>
  );
}

export default FormEdit;
