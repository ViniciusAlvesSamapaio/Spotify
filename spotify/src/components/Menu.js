import {Link} from 'react-router-dom';
import logo from '../logo.png';


function Menu(){
    return(
        <div className="Home-menuBar">
            <a className="logo-a" href="/"><img src={logo} className="logo" alt="logo" /></a>

            <div>
                <ul className="Menu">
                    <li><Link to="/login">Login</Link></li> 
                    <li><Link to="/inscreva-se">Inscreva-se</Link></li> 
                    <li><Link to="/suporte">Suporte</Link></li> 
                    <li><Link to="/playList">PlayList</Link></li> 
                </ul>
            </div>
  
        </div>
    );
}
export default Menu; 