import styled from '@emotion/styled';

const Btn = styled.button`
  background-color: gray;
  color: #fff;
  font-size: 18px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(128, 128, 128, 0.559);
  }
`;

export { Btn };
