import '../css/App.css';

function Initialbanner(){
    return (
        <section className="Home-initial">
        
        <h2>Vá de Premium. E seja feliz!</h2>
        <a href="/inscreva-se" className="Home-btn-initial">Iniciar o teste grátis</a>
        <p className="text-p">* Sujeito a <a href="http://" className="text-sublinhado">Termos e condições</a>. Válido somente para usuários que ainda não experimentaram o Premium.</p>

      </section>
    );
} 
export default Initialbanner;