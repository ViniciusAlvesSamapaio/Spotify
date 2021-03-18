import '../css/App.css';
import Content from '../components/Content';
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="App">
      <header className="Home-menuBar"> 
        
      </header>
      <section className="Home-initial">
        
        <h2>Vá de Premium. E seja feliz!</h2>
        <a href="http://" className="Home-btn-initial">Iniciar o teste grátis</a>
        <p className="text-p">* Sujeito a <a href="http://" className="text-sublinhado">Termos e condições</a>. Válido somente para usuários que ainda não experimentaram o Premium.</p>

      </section>
      <Content>

      </Content>
      

    
    </div>
  );
}
export default Home;
