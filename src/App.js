import React, { Component } from 'react'; 
import './style.css'
import cronometro from './assets/cronometro.png'; 


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'IR'
    };
    this.timer = null;
    this.ir = this.ir.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  ir(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'IR';
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      },100);
      state.botao = 'PAUSAR';
    }

    this.setState(state);
  }
  

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'IR';
    this.setState(state);

  }



  render(){
    return(
      <div className="container">
        <img src={require('./assets/cronometro.png')}  />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.ir}>{this.state.botao}</a>
          <a className="botao" onClick={this.limpar}>LIMPAR</a>
        </div>
      </div>
    );
  }
}

export default App;