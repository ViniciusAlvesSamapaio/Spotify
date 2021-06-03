import './components.css';

function Content(){
    
    return (
        <div className="App">
            <h1>É música que você quer?</h1>
            <p>Conheça os melhores lançamentos do momento.</p>

            <div className="Content">
                <a href="/" className="Content-btn-initial">Abrir o Web Player</a>
            </div>

            <div className="margin-image">
                <div className="albuns">
                    {/* <a href="/" className="albuns-img"><img src={image} className="albuns-img"/></a>
                    <a href="/" className="albuns-img"><img src={image} className="albuns-img"/></a>
                    <a href="/" className="albuns-img"><img src={image} className="albuns-img"/></a> */}
                </div>
            </div>
        </div>
    );
}
export default Content;