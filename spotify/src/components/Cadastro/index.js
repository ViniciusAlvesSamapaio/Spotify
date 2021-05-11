/* eslint-disable jsx-a11y/anchor-is-valid */
import './Cadastro.css';
import React from 'react';
import Menu from '../Menu';
class Cadastro extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            confirmaEmail: '',
            senha: '', 
            nome: '',
            dia: '',
            mes: '',
            ano: '',
            compatilharDados: '',
            termo: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleConfirmaEmailChange = this.handleConfirmaEmailChange.bind(this);

        this.handleSenhaChange = this.handleSenhaChange.bind(this);
        this.handleNomeChange = this.handleNomeChange.bind(this);

        this.handleDiaChange = this.handleDiaChange.bind(this);
        this.handleMesChange = this.handleMesChange.bind(this);
        this.handleAnoChange = this.handleAnoChange.bind(this);

        this.handleCompatilharDadosChange = this.handleCompatilharDadosChange.bind(this);
        this.handleTermoChange = this.handleTermoChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange( event ){ 
        this.setState ({email: event.target.value}); 
    } 

    handleConfirmaEmailChange( event ){ 
        this.setState ({confirmaEmail: event.target.value}); 
    }

    handleSenhaChange( event ){ 
        this.setState ({senha: event.target.value}); 
    }

    handleNomeChange( event ){ 
        this.setState ({nome: event.target.value}); 
    }

    handleDiaChange( event ){ 
        this.setState ({dia: event.target.value}); 
    }

    handleMesChange( event ){ 
        this.setState ({mes: event.target.value}); 
    }

    handleAnoChange( event ){ 
        this.setState ({ano: event.target.value}); 
    }

    handleCompatilharDadosChange( event ){ 
        this.setState ({compatilharDados: event.target.value}); 
    }

    handleTermoChange( event ){ 
        this.setState ({termo: event.target.value}); 
    }

    handleSubmit( event ){
        alert("Cadastrado...");
    }


   render() {
    return(
        <div>
            <Menu />
        
            <h1>Increva-se grátis e comece a curtir!</h1>
        
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label for="email">Qual é o seu e-mail?</label>
                    <br/>
                    <input className="data-input" type="text" name="email" id="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Insira seu e-mail"/>
                </div>
                <div>
                    <label for="confirmaEmail">Confirme seu e-mail</label>
                    <br/>
                    <input className="data-input" type="text" name="confirmaEmail" id="confirmaEmail" value={this.state.confirmaEmail} onChange={this.handleConfirmaEmailChange} placeholder="Insira o e-mail novamente"/>
                </div>
                <div>
                    <label for="senha">Crie uma senha</label>
                    <br/>
                    <input className="data-input" type="password" name="senha" id="senha" value={this.state.senha} onChange={this.handleSenhaChange} placeholder="Crie uma senha"/>
                </div>
                <div>
                    <label for="nome">Como devemos chamar você?</label>
                    <br/>
                    <input className="data-input" type="text" name="nome" id="nome" value={this.state.nome} onChange={this.handleNomeChange} placeholder="Insira um nome de perfil"/>
                </div>
                <div>
                    <label>Qual a sua data de nascimento?</label>
                    <br/>
                    <input className="date" name="dia" id="dia" value={this.state.dia} onChange={this.handleDiaChange} placeholder="DD"/> 
                    <select name="mes" id="mes" value={this.state.mes} onChange={this.handleMesChange} placeholder="Mês">
                        <option value="janeiro">janeiro</option>
                        <option value="fevereiro">fevereiro</option>
                        <option value="março">março</option>
                        <option value="abril">abril</option>
                        <option value="maio">maio</option>
                        <option value="junho">junho</option>
                        <option value="julho">julho</option>
                        <option value="agosto">agosto</option>
                        <option value="setembro">setembro</option>
                        <option value="outubro">outubro</option>
                        <option value="novembro">novembro</option>
                        <option value="dezembro">dezembro</option>
                    </select>
                    <input className="date" name="ano" id="ano" value={this.state.ano} onChange={this.handleAnoChange} placeholder="AAAA"/>
                </div>
                <div>
                    <label for="genero">Qual o seu gênero?</label>
                    <br/>
                    Não sei fazer
                </div>
                <div>
                    <input type="checkbox" name="compatilharDados" id="compatilharDados" value={this.state.compatilharDados} onChange={this.handleCompatilharDadosChange} /> Compartilhar meus dados cadastrais com os provedores de conteúdo do Spotify para fins de marketing.
                </div>
                <div>
                    <input type="checkbox" name="termo" id="termo" value={this.state.termo} onChange={this.handleTermoChange} /> Eu aceito os Termos e Condições e a Política de Privacidade do Spotify.
                </div>
                <center>
                    <a className="Home-btn-initial" type="submit">Inscrever-se</a>
                </center>             
            </form>
        </div>
    );
   }
}
export default Cadastro;