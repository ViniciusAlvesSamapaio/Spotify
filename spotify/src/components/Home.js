import '../css/App.css';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import FAQ from '../components/FAQ';

import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';

function Home(){
  return (
    <div className="App">
      <Router>
      <Menu />
      <section className="Home-initial">
        
        <h2>Vá de Premium. E seja feliz!</h2>
        <a href="http://" className="Home-btn-initial">Iniciar o teste grátis</a>
        <p className="text-p">* Sujeito a <a href="http://" className="text-sublinhado">Termos e condições</a>. Válido somente para usuários que ainda não experimentaram o Premium.</p>

      </section>
      <Switch>
          <Route path="/">
            <Content />
          </Route>
          <Route path="/suporte">
            <FAQ />
          </Route>
      </Switch>

      <Footer />
      </Router>
    </div>
  );
}
export default Home;