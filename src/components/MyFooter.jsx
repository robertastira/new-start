import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function MyFooter() {
  return (
    <Navbar expand="lg" className="bg-body-tertiaryb text-center">
      <Container>
        <Navbar.Brand href="#">Footer</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyFooter;