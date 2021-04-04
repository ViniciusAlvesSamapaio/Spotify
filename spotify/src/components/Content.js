import '../css/App.css';

function Content(){
    return (
        <div className="App">
            <h1>É música que você quer?</h1>
            <p>Conheça os melhores lançamentos do momento.</p>

            <div className="Content">
                <a href="http://" className="Content-btn-initial">Abrir o Web Player</a>
            </div>

            <div className="albuns">
                <div><img src="../img/albums/1.jpg" className="albuns-img"/></div>
                <div><img src="../img/albums/2.jpg"className="albuns-img"/></div>
                <div><img src="../img/albums/3.jpg"className="albuns-img"/></div>
                <div><img src="../img/albums/4.jpg"className="albuns-img"/></div>
                <div><img src="../img/albums/5.jpg"className="albuns-img"/></div>
                <div><img src="../img/albums/6.jpg"className="albuns-img"/></div>
		    </div>
        </div>
    );
}
export default Content;