import React from "react";
import "../style/Home.css";
import "../style/Works.css";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

class Works extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <main>
          <section>
            <div className="card-1">
              <img src="#" alt="#" />
              <span href="http://americaleiloesconsultoria.com.br/">America Leilões</span>
              <p>
                Fui responsável por elaborar a coleta de dados, definir a
                estrutura de armazenamento desses dados utilizando Python e
                MongoDB, fui responsável por implementar API RestFull, regras de
                acesso e filtros utilizando Node JS.
              </p>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Works;
