import React, {Component} from 'react';
import './App.css';
import Suporte from './views/Suporte';
import Cadastro from './views/Cadastro';
import Home from './views/Home';
import Login  from './views/Login';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';

class App extends Component { 
  state = {
    response: ''
  };
  componentDidMount(){
    this.callApi()
      .then(res => this.setState({response: res.express}))
      .cath(error => console.log(error));
  }
  callApi = async () => {
    const response = await fetch('/api');
    const body = await response.json();

    if(response.status !== 200) throw Error(body.message);

    return body;
  };
  
  render(){
    return(
      <Router>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/suporte">
            <Suporte />
          </Route>
  
          <Route path="/inscreva-se">
            <Cadastro />
          </Route>
  
          <Route path="/">
            <Home />
          </Route>
          
      </Switch>
      </Router>
  
    );
  }
}

export default App;