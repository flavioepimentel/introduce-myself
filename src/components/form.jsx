import React, { useState } from "react";
import axios from "axios";
import sta from "../midia/sta.svg";
import "../style/Form.css";

const instance = axios.create({
  baseURL: "https://america-node-server.herokuapp.com",
  headers: {
    "X-Custom-Header": "foobar",
    "Content-Type": "application/json",
  },
});

export default function Form() {
  const INITIAL_STATE = {
    name: "",
    email: "",
    company: "",
    message: "",
  };

  const [form, setForm] = useState(INITIAL_STATE);

  const handleChange = ({ detail, target }) => {
    const { name } = target;
    const newFormValue = { ...form, [name]: detail.value };
    setForm(newFormValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const prevForm = { ...form };
    sendForm(prevForm);
    setForm(INITIAL_STATE);
  };

  const sendForm = (form) => {
    instance
      .post("/send-email", JSON.stringify(form))
      .then((response) =>
        alert("Recebemos sua mensagem e em breve retornaremos o contato")
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="divForm">
      <img className="seta" src={sta} alt='' />
      <h3>Deixe seu contato</h3>
      <form className="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Qual o seu nome?"
          value={form.name}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="text"
          placeholder="E-mail"
          value={form.email}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="text"
          placeholder="Que empresa você representa?"
          value={form.company}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <textarea
          className="longText"
          type="text"
          placeholder="Deixe aqui a sua mensagem."
          value={form.message}
          onChange={(e) => handleChange(e)}
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
