import './index.css';
import React, {Component} from 'react';
import Menu from '../../components/Menu';

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
                <div className="container">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email address" aria-describedby="emailHelp" style={{width: "25rem"}}/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" style={{width: "25rem"}}/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        )
    }

}