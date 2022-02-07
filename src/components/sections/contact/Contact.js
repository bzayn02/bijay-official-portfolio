import React, { useState } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { Title } from '../../section-title/Title';

import './contact.style.css';

export const Contact = () => {
   return (
      <div id="Contact" className="contact">
         <Container>
            <Row className="py-5">
               <Col>
                  <Title title="Contact Me" />
               </Col>
            </Row>
            <div className="textheader">
               Have some idea to create? Let's communicate!
            </div>
            <div className="ContactLists my-3">
               <a href="tel:0410584026">
                  <i className="fas fa-phone-square"></i>
                  <span className="handlers">Call</span>
               </a>
               <a href="mailto:nagarkotibezay02@gmail.com">
                  <i className="fas fa-envelope-square"></i>
                  <span className="handlers">Email</span>
               </a>
            </div>
         </Container>
      </div>
   );
};
