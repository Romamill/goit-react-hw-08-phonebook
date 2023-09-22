import { useState } from 'react';
import { DropdownMenu, MainHeader } from './Header.styled';
import { Btn } from 'ui/Btn.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUserQuery } from 'redux/auth/authApi';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/Slice';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const token = useSelector(state => state.auth.token);

  const { data, isLoading } = useGetUserQuery(token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logOut());
    navigate('/login');
  };

  return (
    <MainHeader>
      <Btn onClick={toggleMenu}>User Menu</Btn>
      <DropdownMenu open={isMenuOpen}>
        <p>User Name: {isLoading ? 'Loading...' : data.name}</p>
        <p>User Email: {isLoading ? 'Loading...' : data.email}</p>
        <Btn onClick={handleSubmit} type="submit">
          Logout
        </Btn>
      </DropdownMenu>
    </MainHeader>
  );
}

export default Header;
