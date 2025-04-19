import { Navbar, Image } from 'react-bootstrap';
import squalo from './trallalero-trallala.png';
import "../App.css"; // Assicuriamoci di avere anche qui gli stili

function MyHeader() {
  return (
    <>
      <Navbar className="matrix-navbar">
        <div className="d-flex justify-content-between align-items-center w-100 px-3">
          {/* Colonna sinistra */}
          <div className="d-flex flex-column align-items-start mt-3 hacker-text-small">
            <span>una</span>
            <span>cazzata</span>
            <span>qua</span>
          </div>

          {/* Brand centrale */}
          <Navbar.Brand className="text-center mx-auto">
            <h1 className="matrix-title mb-2">Trallalero Trallallà</h1>
            <Image src={squalo} alt="Squalo Icona" width="80" height="80" fluid />
          </Navbar.Brand>

          {/* Colonna destra */}
          <div className="d-flex flex-column align-items-end mt-3 hacker-text-small">
            <span>una</span>
            <span>cazzata</span>
            <span>là</span>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export { MyHeader };
