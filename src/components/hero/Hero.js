import React from 'react';

import './hero.style.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bijay from '../../assets/images/bijay.png';
import { Link } from 'react-router-dom';

export const Hero = () => {
   return (
      <div className="hero lg">
         <Container>
            <Row className="lg">
               <Col md="8">
                  <div id="info">
                     <p className="mb-3 text-white">
                        <span className="intro">Hi I'm </span>
                        <span className="name">Bijay Nagarkoti. </span>
                     </p>
                     <p className="bio text-white pt-3">
                        I am a passionate and an enthusiastic learner. I am
                        learning to code every single day. I love to design and
                        develop.
                     </p>
                     <div className="hire-about pt-4">
                        <Link to="/contact">
                           <Button className="hire me-4">HIRE ME</Button>
                        </Link>
                        <Button>
                           <i>
                              <i className="fa fa-download me-3"></i>
                              Resume
                           </i>
                        </Button>
                     </div>
                     <div className="ContactLists">
                        <a
                           href="https://github.com/bzayn02"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <i className="fab fa-github-square"></i>{' '}
                        </a>
                        <a
                           href="https://www.linkedin.com/in/bijay-nagarkoti-831097180/"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <i className="fab fa-linkedin"></i>{' '}
                        </a>
                        <a
                           href="https://twitter.com/bezayn02"
                           target="_blank"
                           rel="noreferrer"
                        >
                           {' '}
                           <i className="fab fa-twitter-square"></i>
                        </a>
                        <a
                           href="https://www.facebook.com/bijay.nagarkoti.02/"
                           target="_blank"
                           rel="noreferrer"
                        >
                           {' '}
                           <i className="fab fa-facebook-square"></i>
                        </a>
                     </div>
                  </div>
               </Col>
               <Col md="4">
                  <div className="pb-3">
                     <img
                        src={bijay}
                        width="100%"
                        height="100%"
                        alt="heroimg"
                     />
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
};
