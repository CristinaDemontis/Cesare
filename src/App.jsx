import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MyHeader } from './componenti/Navigation';
import {Main} from './componenti/Main'
import { Gioco } from './componenti/Gioco';
import {Col, Container, Row, Button } from 'react-bootstrap';
import './App.css'

function App() {
  
  return (
    <div className='hacker-background'>
    <Container fluid className='mt-2'>
    <Row>
      <Col>
        <MyHeader title="Film Library" />
      </Col>
    </Row>
    <Row>
      <Main/>
      <Gioco/>
    </Row>

    
  </Container>
  </div>
  )
}

export default App
