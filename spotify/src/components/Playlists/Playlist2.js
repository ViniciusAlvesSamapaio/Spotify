/* eslint-disable jsx-a11y/alt-text */
import '../../css/Playlist.css';

function Playlist(){
  
    return(
        <div>
            <div className="list">
            <img src="../img/albums/2.jpg"className="albun-img"/>
                <audio controls className="audio">
                    <source src="http://localhost:3000/music/1.mp3" type="audio/mpeg"/>
                </audio>

                <audio controls className="audio">
                    <source src="http://localhost:3000/music/2.mp3" type="audio/mpeg"/>
                </audio>

                <audio controls className="audio">
                    <source src="http://localhost:3000/music/3.mp3" type="audio/mpeg"/>
                </audio>
            </div>
        </div>
    );
}
export default Playlist;