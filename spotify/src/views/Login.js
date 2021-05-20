import './Login.css';
import React, {Component} from 'react';
import Menu from '../components/Menu';

export default class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();

        // chamar api;
        if (this.email === "teste@teste.com" && this.password === "a1b1c1") {
            // Login efetuado
            localStorage.setItem("token", "aaaaaaa");
            window.alert("Logou.. / gravou token / redirecionar para rota correta");
            // chamar rota..
        } else {
            window.alert("Usuário/senha inválidos.");
        }
    };

    render() {
        return (
            <div>
                <Menu />
                <div className="login">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Login</h3>
                        <input type="email" placeholder="Email" className="info-input"
                            onChange={e => this.email = e.target.value}/>
                        <br/>
                        <input type="password" placeholder="Password" className="info-input"
                            onChange={e => this.password = e.target.value}/>
                        <br/>
                        <center>
                            <button className="Home-btn-initial" type="submit">Login</button>
                        </center>
                    </form>
                </div>
            </div>
        )
    }

}