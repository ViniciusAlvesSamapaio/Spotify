import './css/App.css';
import Suporte from './views/Suporte';
import Cadastro from './views/Cadastro';
import Home from './views/Home';
import Login  from './views/Login';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';

function App(){ 
  return(
    <Router>
    <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/suporte">
          <Suporte />
        </Route>

        <Route path="/inscreva-se">
          <Cadastro />
        </Route>

        <Route path="/">
          <Home />
        </Route>
        
    </Switch>
    </Router>

  );
}
export default App;