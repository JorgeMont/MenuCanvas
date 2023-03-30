import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const ModalLoginSesion = () =>{

    return (

        <>
            <div>Modal Inicio Sesión</div>

            <div className='loginSesion'>

                <div className="loginSesion__form">
                    <h1>Inicia sesión</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="email" placeholder="usuario" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <div className="loginSesionBtn">
                            <Button variant="primary" type="submit">
                                Iniciar Sesión
                            </Button>
                        </div>

                    </Form>

                    <div className="sesionSocial">
                        <p>Inicia sesion con:</p>
                        <div className='sesionSocial__icons'>
                            <img src="gmail.png" alt="gmail icon" />
                            <img src="facebook.png" alt="gmail icon" />
                        </div>
                    </div>
                </div>

                <div className="loginSesion__card">
                <Card>
                    <Card.Img variant="top" src="imgFrame.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Secondary text
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>

            </div>
    </>
    )
}


export default ModalLoginSesion;