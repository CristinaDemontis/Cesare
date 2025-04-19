import { useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import "../App.css";

function Gioco() {
  const [buttonPosition, setButtonPosition] = useState(null); // null = posizione normale
  const [showMessage, setShowMessage] = useState(false);
  const [isFirstHover, setIsFirstHover] = useState(true);

  const moveButton = () => {
    if (isFirstHover) {
      setShowMessage(true);
      setIsFirstHover(false);
    }

    const top = Math.random() * 80; // numeri casuali entro area visibile
    const left = Math.random() * 80;
    setButtonPosition({ top: `${top}%`, left: `${left}%` });
  };

  const handleYesClick = () => {
    alert("Benvenuto nel gioco!!! 🎉");
  };

  return (
    <Row className="justify-content-center mt-5">
      <Col sm={10} md={8} lg={6}>
        <Card className="glass-card p-4 text-center position-relative">
          <h2>SIAMO PRONTI PER UN BELLISSIMO GIOCO?!</h2>

          <div className="d-flex justify-content-center mt-4 gap-3 position-relative">
            <Button variant="success" onClick={handleYesClick}>Sì</Button>

            {/* Bottone NO */}
            <div
              onMouseEnter={moveButton}
              style={{
                position: buttonPosition ? "absolute" : "static", // Se ha posizione casuale, assoluto, sennò normale
                top: buttonPosition?.top,
                left: buttonPosition?.left,
                transition: "top 0.3s, left 0.3s",
              }}
            >
              <Button variant="danger">No</Button>
            </div>
          </div>

          {showMessage && (
            <p className="mt-4 text-warning">
              Dai, su su... piccolo spoiler: NON PUOI! 😜
            </p>
          )}
        </Card>
      </Col>
    </Row>
  );
}

export {Gioco};
