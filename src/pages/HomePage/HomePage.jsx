import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import PhoneBook from 'components/PhoneBook/PhoneBook';
import React from 'react';
import { Container } from 'ui/Container.styled';

function HomePage() {
  return (
    <Container>
      <PhoneBook />
      <Filter />
      <Contacts />
    </Container>
  );
}

export default HomePage;
