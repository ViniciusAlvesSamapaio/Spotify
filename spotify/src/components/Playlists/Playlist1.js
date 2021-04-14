/* eslint-disable jsx-a11y/alt-text */
import '../../css/Playlist.css';

function Playlist(){
  
    return(
        <div>
            <div className="list">
            <img src="../img/albums/1.jpg"className="albun-img"/>
                <audio controls className="audio">
                    <source src="http://localhost:3000/music/4.mp3" type="audio/mpeg"/>
                </audio>

                <audio controls className="audio">
                    <source src="http://localhost:3000/music/5.mp3" type="audio/mpeg"/>
                </audio>

                <audio controls className="audio">
                    <source src="http://localhost:3000/music/6.mp3" type="audio/mpeg"/>
                </audio>
            </div>
        </div>
    );
}
export default Playlist; 