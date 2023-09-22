import styled from '@emotion/styled';

const MainHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: blue;
  color: #fff;
  padding: 36px;
  font-size: 24px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  margin-bottom: 20px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 200px;
  background-color: #fff;
  color: #333;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1;
  overflow: hidden;
  max-height: ${({ open }) => (open ? '200px' : '0')};
  max-width: ${({ open }) => (open ? '400px' : '0')};
  border-radius: 5px;
  transition: max-width 0.25s ease-in-out,
    max-height ${({ open }) => (open ? '0.5s' : '0.1s')} ease-in-out;
`;

export { MainHeader, DropdownMenu };
