import FAQ from '../components/FAQ';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

  function Menu(){
      return(
        <div div className="Menu">
            <Router>
                <div>
                    <nav>
                        <ul>
                            {/* <li><Link to="/premium">Premium</Link></li> */}
                            <li><Link to="/suporte">Suporte</Link></li> 
                            
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/suporte">
                            <FAQ />
                        </Route>
                    </Switch>
                </div>
            </Router>
          </div>
      );
  }
  export default Menu;