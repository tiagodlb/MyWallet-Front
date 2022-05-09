import { useNavigate } from "react-router-dom";
import {
  Container,
  SubmitButton2,
} from "../../components/depositWithdrawComponents.js";
import { useState } from "react";
import api from "../../services/api.js";

export default function Deposit() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const userData = JSON.parse(localStorage.getItem("userData"));
  function newDeposit(event) {
    event.preventDefault();

    const body = {
      value: value.replace(",", "."),
      description,
    };

    api
      .postDeposit(body, userData?.token)
      .then((response) => {
        navigate("/bills");
      })
      .catch((error) => {
        if (value.length === 0 || description.length === 0)
          return alert("Os campos devem ser preenchidos!");
      });
  }

  return (
    <Container>
      <h1>Nova Entrada</h1>
      <form onSubmit={newDeposit}>
        <input
          type="text"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <SubmitButton2 type="submit">Salvar Entrada</SubmitButton2>
      </form>
    </Container>
  );
}
