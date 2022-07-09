import { Switch, Route } from '@modern-js/runtime/router';
import 'antd/dist/antd.css';
import FormEdit from './pages/FormEdit';

const App = () => (
  <Switch>
    <Route exact={true} path="/">
      <div className="container-box">
        <FormEdit />
      </div>
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default App;
