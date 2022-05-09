import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  h1 {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-size: 26px;
    font-weight: 700;
    color: white;
  }
  h2 {
    margin: 0 auto;
    margin-top: 20vh;
    font-family: "Raleway", sans-serif;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    color: #868686;
    font-weight: 400;
    width: 180px;
    flex-wrap: wrap;
  }
  b {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-size: 17px;
    font-weight: 700;
    margin-left: 12px;
  }
  span {
    position: absolute;
    right: 0;
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-size: 17px;
    font-weight: 400;
    margin-right: 12px;
    color: ${(props) => (props.saldo > 0 ? "#03AC00" : "#C70000")};
  }
`;

const Header = styled.div`
  width: 90vw;
  display: flex;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  ion-icon {
    display: flex;
    font-size: 33px;
    color: white;
  }
`;

const ExtractContainer = styled.div`
  width: 90vw;
  min-height: 70vh;
  height: auto;
  padding-bottom: 60px;
  background: #ffffff;
  border-radius: 5px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0 auto;
`;

const DepostWithdraw = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 90vw;
  margin: auto;
  justify-content: space-between;
  margin-top: 10px;
  #deposit{
    width: 155px;
    height: 114px;
    width: 42.5vw;
    background: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    
    span{
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-size: 17px;
    font-weight: 700;
    width: 90px;
    color: white;
    margin-top: 35px;
    margin-left: 10px;
    }
}
  #withdraw{
    width: 155px;
    height: 114px;
    width: 42.5vw;
    background: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    
    span{
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-size: 17px;
    font-weight: 700;
    width: 80px;
    color: white;
    margin-top: 35px;
    margin-left: 12px;
    }
}
`;

const Balance = styled.p`
  width: inherit;
  position: absolute;
  bottom: 5px;
  display: flex;
  height: 30px;
  background-color: white;
`;

const Button = styled.div`
  width: 155px;
  height: 114px;
  width: 42.5vw;
  background: #a328d6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  span {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-size: 17px;
    font-weight: 700;
    width: 90px;
    color: white;
    margin-top: 35px;
    margin-left: 10px;
  }
`;

export { Container, Header, Button, ExtractContainer, DepostWithdraw, Balance };
