import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { TopNavbar } from '../../header/Navbar';
import { Title } from '../../section-title/Title';

import './contact.style.css';

export const Contact = () => {
   return (
      <div id="Contact" className="contact">
         <TopNavbar />
         <Container>
            <Row className="py-5">
               <Col>
                  <Title title="Contact Me" />
               </Col>
            </Row>
            <div className="ContactLists my-4">
               <a href="tel:0410584026">
                  <i className="fas fa-phone-square"></i>
                  <span className="handlers">04********</span>
               </a>
               <a href="mailto:nagarkotibezay02@gmail.com">
                  <i className="fas fa-envelope-square"></i>
                  <span className="handlers">nagarkotibezay02@gmail.com</span>
               </a>
            </div>
            <div className="my-5">
               <Form id="contact-form">
                  <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlInput1"
                  >
                     <Form.Label className="form-title">Full Name</Form.Label>
                     <Form.Control type="name" placeholder="Sam Smith" />
                  </Form.Group>
                  <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlInput1"
                  >
                     <Form.Label className="form-title">
                        Email address
                     </Form.Label>
                     <Form.Control
                        type="email"
                        placeholder="name@example.com"
                     />
                  </Form.Group>
                  <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlTextarea1"
                  >
                     <Form.Label className="form-title">
                        Your Message
                     </Form.Label>
                     <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button>Send</Button>
               </Form>
            </div>
         </Container>
      </div>
   );
};
