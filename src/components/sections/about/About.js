import React from 'react';
import { Title } from '../../section-title/Title';
import { Container, Row, Col } from 'react-bootstrap';

import './about.style.css';
import bijay from '../../../assets/images/bijay.png';
import { QualificationTimeline } from './QualificationTimeline';

export const About = () => {
   return (
      <div id="About" className="about">
         <Container>
            <Row className="py-5">
               <Col>
                  <Title title="About Me" />
               </Col>
            </Row>
            <Row className="">
               <Col md="7">
                  <div className="py-2 about-description">
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aut voluptatibus libero qui mollitia quaerat
                        ratione autem nihil ut a. Quo facere quisquam fuga neque
                        repellat, rerum vitae beatae reprehenderit inventore!
                     </p>
                  </div>
               </Col>
               <Col md="5">
                  <div className="pro-img">
                     <img
                        className="img-responsive"
                        src={bijay}
                        width="90%"
                        height="100%"
                        alt=""
                     />
                  </div>
               </Col>
            </Row>
         </Container>
         <QualificationTimeline />
         {/* <WorkExperienceTimeline /> */}
      </div>
   );
};
