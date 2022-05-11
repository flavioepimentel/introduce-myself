import React from "react";
import sta from "../midia/sta.svg";
import "../style/Form.css";

class Form extends React.Component {
  render() {
    return (
      <div className="divForm">
        <img className="seta" src={sta} />
        <h3>Deixe seu contato</h3>
        <form className="contactForm">
          <input type="text" placeholder="Qual o seu nome?" />
          <br />
          <input type="text" placeholder="E-mail" />
          <br />
          <input type="text" placeholder="Que empresa você representa?" />
          <br />
          <textarea
            className="longText"
            type="text"
            placeholder="Deixe aqui a sua mensagem."
          />
          <br />
        </form>
        <button type="submit" className="button">
          Enviar
        </button>
        <br />
      </div>
    );
  }
}

export default Form;
