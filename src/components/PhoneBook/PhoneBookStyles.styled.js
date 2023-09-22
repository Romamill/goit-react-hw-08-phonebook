import styled from "@emotion/styled";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  margin: 0 auto;
`;

const MainText = styled.h1`
  font-size: 42px;
  color: blue;
  margin-bottom: 24px;
`;

const Input = styled.input`
  padding: 14px;
  border: 2px solid #aaa;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  margin-bottom: 16px;
  transition: border-color 0.2s ease-in-out; 

  &:focus {
    border-color: #007bff; 
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  ::placeholder {
    color: #888;
  }
`;

export { MainText, Input, Form};