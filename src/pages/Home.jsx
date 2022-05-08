import React from "react";
import "../style/Home.css";
import sta from "../midia/sta.svg";

class Home extends React.Component {
  render() {
    return (
      <main>
        <section>
          <div>
            <h1 className="name">Flávio E Pimentel</h1>
            <h4 className="occupation">
              Desenvolvedor Full-Stack & Data Scientist
            </h4>
            <br />
            <div id="about" className="about">
              <p className="description">
                Desenvolvendo soluções desde 2020, formado em engenharia de
                produção e apaixonado por programação desde o primeiro contato.
                Utilizo como principais ferramentas Python, JavaScript,
                TypeScript, SQL e NoSQL, entre outras tecnologias e frameworks.
                Trabalho atualmente como backend, meio período na América
                Leilões Consultoria
              </p>
            </div>
          </div>
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
        </section>
      </main>
    );
  }
}

export default Home;
