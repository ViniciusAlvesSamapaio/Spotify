import '../css/App.css';
import logo from '../logo.png';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

function Home() {
  return (
    <div className="App">
      <div className="Home-menuBar">
        <a className="logo-a" href="http://localhost:3000"><img src={logo} className="logo" alt="logo" /></a>
        
        <Menu />
      </div>

      <section className="Home-initial">
        
        <h2>Vá de Premium. E seja feliz!</h2>
        <a href="http://" className="Home-btn-initial">Iniciar o teste grátis</a>
        <p className="text-p">* Sujeito a <a href="http://" className="text-sublinhado">Termos e condições</a>. Válido somente para usuários que ainda não experimentaram o Premium.</p>

      </section>

      <Content />
      <Footer />

    </div>
  );
}
export default Home;
