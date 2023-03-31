import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function ModalUserRegistration() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose} dialogClassName="modal-90vw" id="complete-modal">
            <Modal.Header closeButton>
            <Modal.Title><h3 id="modal-title">Crear Cuenta</h3></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label></Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nombre Completo"
                    autoFocus
                    id="modal-input"
                />

                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label></Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Correo"
                    autoFocus
                    id="modal-input"
                />

                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                
                >
                <Form.Label></Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Contraseña"
                    autoFocus
                    id="modal-input"
                />
                </Form.Group>

                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                
                >
                <Form.Label></Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Confirmar Contraseña"
                    autoFocus
                    id="modal-input"
                />
                </Form.Group>

            </Form>
            </Modal.Body>
            <Modal.Footer id="modal-footer">
            <Button variant="primary" onClick={handleClose}>
                Registrar
            </Button>
            <p>O registrate con</p>
            <div className="modal-footer-images">
                <ul>
                    <li><a href="/">GM</a></li>
                    <li><a href="/">FB</a></li>
                </ul>
            </div>
            <a href="/">Iniciar Sesion</a>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ModalUserRegistration
