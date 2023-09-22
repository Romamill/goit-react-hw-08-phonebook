import { ThreeDots } from 'react-loader-spinner';
import React from 'react';
import { Container } from 'ui/Container.styled';

function Loader() {
  return (
    <Container>
      <ThreeDots
        height="180"
        width="180"
        radius="9"
        color="#00aaff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Container>
  );
}

export default Loader;
