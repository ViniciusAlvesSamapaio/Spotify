/* eslint-disable jsx-a11y/alt-text */
import '../css/App.css';

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
                    <a href="/" className="albuns-img"><img src="../img/albums/1.jpg" className="albuns-img"/></a>
                    <a href="/" className="albuns-img"><img src="../img/albums/2.jpg" className="albuns-img"/></a>
                    <a href="/" className="albuns-img"><img src="../img/albums/3.jpg" className="albuns-img"/></a>
                </div>
            </div>
        </div>
    );
}
export default Content;