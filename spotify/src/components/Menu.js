import {Link} from 'react-router-dom';
import logo from '../logo.png';


function Menu(){
    return(
        <div className="Home-menuBar">
            <a className="logo-a" href="http://localhost:3000"><img src={logo} className="logo" alt="logo" /></a>
            <div className="Menu">
                <div>
                    <nav>
                        <ul>
                            {/* <li><Link to="/premium">Premium</Link></li> */}
                            <li><Link to="/suporte">Suporte</Link></li> 
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
export default Menu;