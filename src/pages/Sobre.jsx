import React from "react";
import Navbar from "../components/navbar";
import "../style/Sobre.css";


class Sobre extends React.Component {
  render() {
    return (
      <>
      <div className="sobre">
      <Navbar />
      <main>
        <div>
          <img src="" alt="Me" className="profile"></img>
        </div>
        <h1>Flávio E. Pimentel</h1>
        <div className="div-info">
          <h3 className="titulo-info">Sobre</h3>
          <p className="texto-sobre"></p>
        </div>
        <div className="div-info">
          <h3>Skills</h3>
          <ul>
          <li>Backend com NodeJS, Python, SQL e MongoDB</li>
          <li>Frontend com ReactJS, HTML5, CSS3, Ionic</li>
          <li>Ciência de dados com Scrapy, Requests, REST API, MitmiProxy and GoogleSheets</li>
          </ul>
        </div>
        <div className="div-info">
          <h3 className="titulo-info">Ferramentas / Nível</h3>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>Django</li>
            <li>Web2py</li>
            <li>NodeJS</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Jupyter Notebook</li>
            <li>Scrapy</li>
            <li>SkLearn, MatplotLib e Seaborn</li>
            <li>Ionic</li>
            <li>AdonisJS</li>
            <li>C# e .NET</li>
            <li>MySQL e SQLite</li>
            <li>MongoDB</li>
            <li>Solidity</li>
            <li>Google Sheets e App Scripts</li>
          </ul>
        </div>
        <div className="div-info">
          <h3 className="titulo-info">Trajetória</h3>
          <p></p>
        </div>
        <div className="div-info">
          <h3 className="titulo-info">Formação Acadêmica</h3>
          <p></p>
        </div>
        <div className="div-info">
          <h3 className="titulo-info">Coisas que gosto</h3>
          <p></p>
        </div>
      </main>
      </div>
      </> 
    );
  }
}

export default Sobre;
