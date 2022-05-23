import React from "react";
import "../style/Works.css";
import img from "../midia/Ativo 10.png";
import { Link } from "react-router-dom";

// import { Container } from './styles';
const data = require("../data.json");

export default function Card() {
  const dataMap = new Array(data);
  for (let i = 0; dataMap.length >= i; i++) {
    return (
      <section className="section-card">
        <div key={dataMap[i]["data"][i]["id"]} className="card">
          <a
            href={dataMap[i]["data"][i]["link"]}
            target="_blank"
            rel="noreferrer"
          >
            <img className="imagem-card" src={img} alt="#" />
          </a>
          <br />

          <a
            target="_blank"
            href={dataMap[i]["data"][i]["link"]}
            rel="noreferrer"
          >
            {dataMap[i]["data"][i]["titulo"]}
          </a>

          <p>{dataMap[i]["data"][i]["description"]}</p>
        </div>
      </section>
    );
  }
}
