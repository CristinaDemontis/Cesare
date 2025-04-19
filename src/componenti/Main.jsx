import { Card, Col, Row } from 'react-bootstrap';
import '../App.css'; // Per usare anche qui gli stili che abbiamo già

function Main() {
  return (
    <Row className="justify-content-center mt-5">
      <Col sm={10} md={8} lg={6}>
        <Card className="glass-card p-4 text-center">
          <h2 className="mb-4">Benvenuto nel magico mondo del fungo hacker!!!</h2>
          <p>Scoprirai cosa significa avere una SPLENDIDA ragazza un po' nerd che studia informatica!!!</p>
        </Card>
      </Col>
    </Row>
  );
}

export{Main}
