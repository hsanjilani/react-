import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CloseButton from 'react-bootstrap/CloseButton';


function App() {
  return (
    <div className="App">
    <h1>checkpoint</h1>
    <h2> marahbe bik</h2>
    
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <CloseButton />
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <>
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
    </>
    <Stack direction="horizontal" gap={3}>
      <Form.Control className="me-auto" placeholder="Add your item here..." />
      <Button variant="secondary">Submit</Button>
      <div className="vr" />
      <Button variant="outline-danger">Reset</Button>
    </Stack>
    <>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </>
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>

    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>hssan</td>
          <td>djilani</td>
          <td>mafioza</td>
        </tr>
        <tr>
          <td>2</td>
          <td>oussema</td>
          <td>benhriz</td>
          <td>oussemabh</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>jaber the Bird</td>
          <td>jaber</td>
        </tr>
      </tbody>
    </Table>
    <Stack gap={2} className="col-md-5 mx-auto">
      <Button variant="secondary">Save changes</Button>
      <Button variant="outline-secondary">Cancel</Button>
    </Stack>
    <ProgressBar>
      <ProgressBar striped variant="success" now={35} key={1} />
      <ProgressBar variant="warning" now={20} key={2} />
      <ProgressBar striped variant="danger" now={10} key={3} />
    </ProgressBar>

    
    </div>
  );
}

export default App;
