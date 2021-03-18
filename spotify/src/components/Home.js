import '../css/App.css';
import Content from '../components/Content';
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'

function Home() {
  return (
    <div className="App">
      <div className="Home-menuBar"> 
        <ul className="Menu">
          {/* <li><a href="http://">Premium</a></li> */}
          {/* <li><a href="http://">Suporte</a></li> */}
          {/* <li><a href="http://">Baixar</a></li> */}
        </ul>
      </div>
      <section className="Home-initial">
        
        <h2>Vá de Premium. E seja feliz!</h2>
        <a href="http://" className="Home-btn-initial">Iniciar o teste grátis</a>
        <p className="text-p">* Sujeito a <a href="http://" className="text-sublinhado">Termos e condições</a>. Válido somente para usuários que ainda não experimentaram o Premium.</p>

      </section>

      <Content />
      <FAQ />
      <Footer />

    </div>
  );
}
export default Home;
