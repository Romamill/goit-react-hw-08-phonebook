import styled from '@emotion/styled';

const Btn = styled.button`
  background-color: blue;
  color: #fff;
  font-size: 18px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgb(0, 68, 255);
  }
`;

export { Btn };
