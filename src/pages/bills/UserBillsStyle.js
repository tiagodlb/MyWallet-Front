import styled from "styled-components";

const Line = styled.div`
  display: flex;
  word-wrap: break-word;
  justify-content: space-between;
  margin-top: 23px;
`;

const DateAndName = styled.div`
  display: flex;
`;

const Date = styled.div`
  font-family: "Raleway", sans-sarif;
  font-size: 16px;
  font-weight: 400;
  color: #c6c6c6;
  margin-left: 12px;
`;

const Name = styled.div`
  font-family: "Raleway", sans-sarif;
  font-size: 16px;
  font-weight: 400;
  color: black;
  margin-left: 12px;
`;

const Value = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #c6c6c6;
  margin-left: 12px;
`;

export { Value, Name, Date, DateAndName, Line };
