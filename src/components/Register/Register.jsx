import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginMutation, useRegisterMutation } from 'redux/auth/authApi';
import { Btn } from 'ui/Btn.styled';
import { Container } from 'ui/Container.styled';
import { Text } from 'ui/Text.styled';
import { Label } from 'components/Login/Login.styled';
import {
  Input,
  Form,
  MainText,
} from 'components/PhoneBook/PhoneBookStyles.styled';
import { useDispatch } from 'react-redux';
import { setToken } from 'redux/auth/Slice';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

function Register() {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [register] = useRegisterMutation();
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
    if (formData.name && formData.email && formData.password) {
      const response = await register(formData);
      if (response) {
        const { data } = await login({
          email: formData.email,
          password: formData.password,
        });
        dispatch(setToken(data.token));
        navigate('/');
      } else if (!response) {
        alert("You made a mistake try again!");
      }
    }
    reset();
  };
  const reset = () => {
    setFormData({ ...INITIAL_STATE });
  };
  return (
    <Container>
      <MainText>Register</MainText>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your name"
          required
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="example@gmail.com"
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
        If you already have the account{' '}
        <NavLink to="/login">click here</NavLink>
      </Text>
    </Container>
  );
}

export default Register;
