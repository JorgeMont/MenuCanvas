import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
//import PriceImg from '../Images/golum.jpg';
import PriceImg from './images/golum';

import 'bootstrap/dist/css/bootstrap.min.css';


function CardsPrice() {
    return (
        <Row xs={1} md={3} lg={5} className="m-3 gap-5" style={{justifyContent:'center'} }>
            
          <Card border="dark"  style={{textAlign:'center'}} className="p-0 m-2" >
              <Card.Img variant="top" src={PriceImg} width="100%"/>
              <Card.Body >
                  <Card.Title>1 MES</Card.Title> 
              </Card.Body>
        
              <Card.Body >
                  <Card.Link href="#">$ 99 MXN</Card.Link>   
              </Card.Body>
          </Card>
  
          <Card border="dark" style={{textAlign:'center'}} className="p-0 m-2">
              <Card.Img variant="top" src={PriceImg} />
              <Card.Body >
                  <Card.Title>3 MESES</Card.Title>
          
              </Card.Body>
        
              <Card.Body >
                  <Card.Link href="#">$ 199 MXN</Card.Link>
          
              </Card.Body>
          </Card>
  
          <Card  border="dark" style={{textAlign:'center'}} className="p-0 m-2">
              <Card.Img variant="top" src={PriceImg} />
              <Card.Body >
                  <Card.Title>6 MESES</Card.Title> 
              </Card.Body>
        
              <Card.Body >
                  <Card.Link href="#">$ 299 MXN</Card.Link>   
              </Card.Body>
          </Card>
  
        <Card  border="dark" style={{textAlign:'center'}} className="p-0 m-2">
              <Card.Img variant="top" src={PriceImg} />
              <Card.Body >
                  <Card.Title>12 MESES</Card.Title> 
              </Card.Body>
        
              <Card.Body >
                  <Card.Link href="#">$ 399 MXN</Card.Link>   
              </Card.Body>
          </Card>
          
          </Row>
  
     
    );
  }



export default CardsPrice;

