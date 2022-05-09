import axios from "axios";

let MONGO_URL = "http://localhost:5000";
function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function postSignUp(body) {
  const promise = axios.post(`${MONGO_URL}/auth/sign-up`, body);
  return promise;
}

function postLogin(body) {
  const promise = axios.post(`${MONGO_URL}/auth/sign-in`, body);
  return promise;
}

function getUserRegisters(token) {
  const config = createConfig(token);
  const promise = axios.get(`${MONGO_URL}/userRegisters`, config);
  return promise;
}

function postDeposit(body, token) {
  const config = createConfig(token);
  const promise = axios.get(`${MONGO_URL}/deposit`, body, config);
  return promise;
}

function postWithdraw(body, token) {
  const config = createConfig(token);
  const promise = axios.get(`${MONGO_URL}/withdraw`, body, config);
  return promise;
}

function signOut(token) {
  const config = createConfig(token);
  const promise = axios.delete(`${MONGO_URL}/sign-out`, config);
  return promise;
}

const api = {
  postLogin,
  postSignUp,
  getUserRegisters,
  postDeposit,
  postWithdraw,
  signOut,
};

export default api;
