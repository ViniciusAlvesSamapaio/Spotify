/* eslint-disable jsx-a11y/alt-text */
import '../../css/Playlist.css';

function Playlist(){
  
    return(
        <div>
            <div className="list">
            <img src="../img/albums/3.jpg"className="albun-img"/>
                <audio controls className="audio">
                    <source src="http://localhost:3000/music/7.mp3" type="audio/mpeg"/>
                </audio>

                <audio controls className="audio">
                    <source src="http://localhost:3000/music/8.mp3" type="audio/mpeg"/>
                </audio>

                <audio controls className="audio">
                    <source src="http://localhost:3000/music/9.mp3" type="audio/mpeg"/>
                </audio>
            </div>
        </div>
    );
}
export default Playlist;