import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react/cjs/react.production.min";
import UserContext from "./context/UserContext";
import styled from "styled-components";
import Bills from "./pages/bills/bills";
import Deposit from "./pages/deposit/deposit";
import SignUp from "./pages/signup/signup";
import SignIn from "./pages/signin/signin";
import Withdraw from "./pages/withdraw/withdraw";

export default function App() {
  const [user, setUser] = useState("");

  return (
    <UserContext.Povider value={{ user, setUser }}>
      <BrowserRouter>
        <Page>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
          </Routes>
        </Page>
      </BrowserRouter>
    </UserContext.Povider>
  );
}

const Page = styled.div`
  height: 100vh;
  background: #8c11b3;
`;
