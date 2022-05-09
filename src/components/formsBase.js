import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    color: white;
    background: #A328D6;
    max-width: 90vw;
    height: 46px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 15px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  color: white;
  margin-top: 30px;
`;

export { Container, Button, StyledLink };
