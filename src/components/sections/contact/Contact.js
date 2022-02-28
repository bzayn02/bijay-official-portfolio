import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
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
               HAVE SOME IDEA TO CREATE? <br />
               WANT TO HIRE ME? <br />
               PLEASE, GET IN TOUCH VIA PHONE OR EMAIL.
            </div>
            <div className="lists-of-contacts d-flex justify-content-around">
               <div>
                  <a href="tel:0410584026">
                     <i className="fas fa-phone-square"></i>
                     <span className="handlers">Call</span>
                  </a>
               </div>
               <div>
                  <a href="mailto:nagarkotibezay02@gmail.com">
                     <i className="fas fa-envelope-square"></i>
                     <span className="handlers">Email</span>
                  </a>
               </div>
            </div>
            <div className="contacts-handlers lists-of-contacts">
               <div>
                  {' '}
                  <a
                     href="https://github.com/bzayn02"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <i className="fab fa-github-square"></i>
                     <span className="handlers">bzayn02</span>
                  </a>
               </div>
               <div>
                  {' '}
                  <a
                     href="https://www.linkedin.com/in/bijay-nagarkoti-831097180/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <i className="fab fa-linkedin"></i>
                     <span className="handlers">bijay-nagarkoti</span>
                  </a>
               </div>
               <div>
                  {' '}
                  <a
                     href="https://twitter.com/bezayn02"
                     target="_blank"
                     rel="noreferrer"
                  >
                     {' '}
                     <i className="fab fa-twitter-square"></i>
                     <span className="handlers">@bezayn02</span>
                  </a>
               </div>
               <div>
                  {' '}
                  <a
                     href="https://www.facebook.com/bijay.nagarkoti.02/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     {' '}
                     <i className="fab fa-facebook-square"></i>
                     <span className="handlers">Bijay Nagarkoti</span>
                  </a>
               </div>
            </div>
         </Container>
      </div>
   );
};
