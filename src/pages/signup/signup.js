import { useNavigate } from "react-router-dom";
import { React, useState, useContext } from "react";
import { Container, Button, StyledLink } from "../../components/formsBase";
import api from "../../services/api";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  function validatePassword() {
    if (password !== confirmPassword) return true;
  }

  async function SignUp(event) {
    event.preventDefault();
    setDisableButton(true);
    if (validatePassword()) {
      console.log(disableButton);
      setDisableButton(false);
      return alert("As senhas devem ser iguais!");
    } else {
      const body = { name, email, password };
      try {
        await api.postSignUp(body);
        alert("O usuário foi cadastrado com sucesso!");
      } catch (error) {
        console.log(disableButton);
        setDisableButton(false);
        if (email.length === 0 || password === 0 || name.length === 0) {
          return alert("Todos os campos devem ser preenchidos");
        }
      }
      navigate("/");
    }
  }

  return (
    <Container>
      <h1>My Wallet</h1>
      <form onSubmit={SignUp}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        <Button type="submit" disabled={disableButton}>
          {disableButton ? (
            <ThreeDots
              type="ThreeDots"
              color="#ffffff"
              alignSelf={"center"}
              height={60}
              width={60}
            />
          ) : (
            "Cadastrar"
          )}
        </Button>
      </form>

      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
}
