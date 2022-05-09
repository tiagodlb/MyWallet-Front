import { useNavigate } from "react-router-dom";
import { React, useState, useContext } from "react";
import { Container, Button, StyledLink } from "../../components/formsBase";
import api from "../../services/api";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Login(event) {
    event.preventDefault();
    const body = {
      email,
      password,
    };
    api
      .postLogin(body)
      .then((response) => {
        localStorage.setItem("userInfos", JSON.stringify(response.data));

        navigate("/bills");
      })
      .catch((error) => {
        if (email.length === 0 || password.length === 0)
          return alert("Todos os campos são obrigatórios!");
        console.log(error);
      });
  }
  return (
    <Container>
      <h1>My Wallet</h1>

      <form onSubmit={Login}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit"> Entrar </Button>
      </form>

      <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  );
}
