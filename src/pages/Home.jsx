import React from "react";
import "../style/Home.css";
import Form from "../components/form";
import Navbar from "../components/navbar";

class Home extends React.Component {
  render() {
    return (
      <>
      <Navbar />
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
          <Form />
        </section>
      </main>
      </>
    );
  }
}

export default Home;
