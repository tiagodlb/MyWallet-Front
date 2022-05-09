import {
  Container,
  Button,
  Header,
  ExtractContainer,
  DepostWithdraw,
  Balance,
} from "./billsStyle";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api.js";
import UserBill from "./UserBills.js";

export default function Bills() {
  const navigate = useNavigate();

  const [userRegisters, setUserRegisters] = useState([]);
  const [total, setTotal] = useState(0);

  const userInfos = JSON.parse(localStorage.getItem("userInfos"));

  useEffect(() => {
    async function renderRegister() {
      try {
        const response = await api.getUserRegisters(userInfos?.token);
        setUserRegisters(response?.data);
      } catch (error) {
        return alert("Não foi possivel carregar as informações de registro");
      }
    }
    renderRegister();
  }, [navigate]);

  useEffect(() => {
    if (userRegisters.length !== 0) TotalBalance();
  }, [userRegisters]);

  function TotalBalance() {
    let totalDeposit = 0;
    let totalWithdraw = 0;

    for (let i = 0; i < userRegisters.length; i++) {
      if (userRegisters[i].type === "deposit") {
        const depositValue = userRegisters[i].value;
        totalDeposit += parseFloat(depositValue);
      } else {
        const withdrawValue = userRegisters[i].value;
        totalWithdraw += parseFloat(withdrawValue);
      }
      setTotal((totalDeposit - totalWithdraw).toFixed(2));
    }
  }
  function signOut() {
    try {
      api.signOut(userInfos?.token).then(() => {
        localStorage.removeItem("userInfos");
        navigate("/");
      });
    } catch (error) {
      console.error(error);
      return alert("Não foi possivel sair");
    }
  }
  return (
    <Container>
      <Header>
        <h1>{`Olá, ${userInfos?.userName}`}</h1>
        <ion-icon name="exit-outline" onClick={signOut}></ion-icon>
      </Header>

      <ExtractContainer>
        {!total ? (
          <h2>Não há registro de entrada ou saída</h2>
        ) : (
          console.log(userRegisters) // mexi em alguma coisa e deu xabu e n to conseguindo consertar :) perdão por não ter chamado na tutoria antes
        )}
        <Balance saldo={total}>
          <b>SALDO</b>
          <span>{String(total).replace(".", ",").replace("-", "")}</span>
        </Balance>
      </ExtractContainer>

      <DepostWithdraw>
        <Button id="deposit">
          <ion-icon name="add-circle-outline"></ion-icon>
          <span>Nova Entrada</span>
        </Button>
        <Button id="withdraw">
          <ion-icon name="remove-circle-outline"></ion-icon>
          <span>Nova Saída</span>
        </Button>
      </DepostWithdraw>
    </Container>
  );
}
