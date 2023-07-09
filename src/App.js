import 'bootstrap/dist/css/bootstrap.min.css';
import Playlist from './component/Playlist'
import {Container, Row, Col} from 'react-bootstrap'

// import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col >
          <h1>Outstanding Players of the Season</h1>
          <Playlist />
        </Col>
      </Row>
    </Container>
  );
}

export default App;


