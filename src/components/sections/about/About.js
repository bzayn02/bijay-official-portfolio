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
                  <div className="py-2 about-description mt-5">
                     <p>
                        A self-disciplined and passionate Bachelor of
                        Information Technology (Software Engineering) graduate
                        from Kent Institute Australia, seeking to start a career
                        as a web developer (MERN: frontend and backend). Keen to
                        learn and further develop my technical abilities in the
                        field of web development, where I can utilize my problem
                        solving and good analytical skills.
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
