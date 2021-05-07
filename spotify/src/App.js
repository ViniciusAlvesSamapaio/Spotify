/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */

import './css/App.css';
import Initialbanner from './components/Initialbanner';
import Content from './components/Content';
import Footer from './components/Footer';
import Menu from './components/Menu';
import FAQ from './components/FAQ/index';
import Cadastro from './components/Cadastro';
import albums from './components/albums';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';


function App(){ 
  return(
    <Router>
    <Menu />
    <Switch>
        <Route path="/suporte">
          <FAQ />
        </Route>

        <Route path="/inscreva-se">
          <Cadastro />
        </Route>

        <Route path="/">
          <Initialbanner />
          <Content />
        </Route>
        
    </Switch>
      
      <Footer />
    </Router>

  );
}
export default App;