import { BallTriangle } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <BallTriangle
        height="100"
        width="100"
        color="#c79b5d"
        ariaLabel="loading"
      />
    </Container>
  );
};

export default Loader;
