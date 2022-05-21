import React from "react";
import Navbar from "../components/navbar";
import "../style/Sobre.css";
import me from "../midia/me.jpg";

class Sobre extends React.Component {
  render() {
    return (
      <>
        <div className="sobre">
          <Navbar />
          <main className="sobre-main">
          <div className="profile-user col-1">
            <img src={me} alt="Me" className="profile"></img>
          <h1>Flávio E. Pimentel</h1>

          </div>

            <br />
            <div className="col-2">
            <section className="sobre-section">
              <h3 className="titulo-info">Sobre</h3>
              <div className="div-info">
                <p className="texto-sobre">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  maiores quam excepturi, accusamus voluptatem cupiditate porro
                  sunt minima animi suscipit tempora? Exercitationem, deserunt.
                  Veniam minus at voluptas reprehenderit debitis quos? Quo
                  molestias sint, corporis totam culpa ipsam eum pariatur saepe
                  praesentium dicta nulla quas inventore nisi voluptates quasi!
                  Corrupti deleniti recusandae harum voluptate quis sint laborum
                  cupiditate quod, eum cumque?
                </p>
              </div>
            </section>
            <br />
            <section className="sobre-section">
              <h3 className="titulo-info">Skills</h3>
              <div className="div-info">
                <ul>
                  <li>Backend com NodeJS, Python, SQL e MongoDB</li>
                  <li>Frontend com ReactJS, HTML5, CSS3, Ionic</li>
                  <li>
                    Ciência de dados com Scrapy, Requests, REST API, Mitm Proxy
                    and GoogleSheets
                  </li>
                </ul>
              </div>
            </section>
            <br />
            <section className="sobre-section">
              <h3 className="titulo-info">Ferramentas / Nível</h3>
              <div className="div-info">
                <ul className="lista-ferramentas">
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>Django</li>
                  <li>Web2py</li>
                  <li>NodeJS</li>
                  <li>React</li>
                </ul>
                <ul className="lista-ferramentas">
                  <li>TypeScript</li>
                  <li>Jupyter Notebook</li>
                  <li>Scrapy</li>
                  <li>SkLearn, MatplotLib e Seaborn</li>
                  <li>Ionic</li>
                  <li>AdonisJS</li>
                </ul>
                <ul className="lista-ferramentas">
                  <li>C# e .NET</li>
                  <li>MySQL e SQLite</li>
                  <li>MongoDB</li>
                  <li>Solidity</li>
                  <li>Google Sheets e App Scripts</li>
                </ul>
              </div>
            </section>
            <br />
            <section className="sobre-section">
              <h3 className="titulo-info">Trajetória</h3>
              <div className="div-info">
                <p></p>
              </div>
            </section>
            <br />
            <section className="sobre-section">
              <h3 className="titulo-info">Formação Acadêmica</h3>
              <div className="div-info">
                <ul>
                  <li>
                    <h4>Engenharia de Produção</h4>
                    <p>(2014 - 2021)</p>
                    <p>Faculdade Anísio Teixeira</p>
                  </li>
                  <li>
                    <h4>Análise e Desenvolvimento de Sistemas</h4>
                    <p>(2022 - 2027)</p>
                    <p>Universidade Nove de Julho</p>
                  </li>
                </ul>
              </div>
            </section>
            </div>
            <br />
          </main>
        </div>
      </>
    );
  }
}

export default Sobre;
