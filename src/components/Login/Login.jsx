import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Label } from './Login.styled';
import { Btn } from 'ui/Btn.styled';
import {
  Form,
  Input,
  MainText,
} from 'components/PhoneBook/PhoneBookStyles.styled';
import { NavLink } from 'react-router-dom';
import { Text } from 'ui/Text.styled';
import { Container } from 'ui/Container.styled';
import { useLoginMutation } from 'redux/auth/authApi';
import { useDispatch } from 'react-redux';
import { setToken } from 'redux/auth/Slice';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function Login() {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (formData.email && formData.password) {
      const { data } = await login(formData);
      if (data) {
        dispatch(setToken(data.token));
        navigate('/');
      } else if (!data) {
        alert("You made a mistake or you didn't register");
      }
    }
    reset();
  };
  const reset = () => {
    setFormData({ ...INITIAL_STATE });
  };
  return (
    <Container>
      <MainText>Sign In</MainText>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="example@gmial.com"
          required
        />
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          pattern=".{8,12}"
          title="Password must be between 8 and 12 characters"
          required
        />
        <Btn type="submit">Submit</Btn>
      </Form>
      <Text>
        If you don't have the account{' '}
        <NavLink to="/register">click here</NavLink>
      </Text>
    </Container>
  );
}

export default Login;
