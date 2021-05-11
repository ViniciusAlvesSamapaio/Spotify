import './css/App.css';
import FAQ from './components/FAQ/index';
import Cadastro from './components/Cadastro/index';
import Home from './components/Home/index';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';


function App(){ 
  return(
    <Router>
    <Switch>
        <Route path="/suporte">
          <FAQ />
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