import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Title } from '../../section-title/Title';
import portfolio from '../../../assets/images/portfolioImg.jpg';

import './projects.style.css';

export const Projects = () => {
   return (
      <div id="Projects" className="projects">
         <Container>
            <Row className="py-5">
               <Col>
                  <Title title="Projects" />
               </Col>
            </Row>
            <div className="myprojectlists my-5">
               <Row className="">
                  <Col md="5">
                     <div class="pro-img me-2">
                        <img src={portfolio} height="100%" width="90%" alt="" />
                     </div>
                  </Col>
                  <Col md="7">
                     <span className="info">
                        <span className="info-title fs-3">
                           Project Portfolio
                        </span>
                        <div className="tech fs-4">
                           Techs used:{'  '}
                           <i>HTML, CSS, React</i>{' '}
                        </div>
                        <div className="links fs-4">
                           <a href="https://github.com/bzayn02">
                              <i className="fab fa-github-square"></i>
                           </a>
                        </div>
                        <p>
                           This project portfolio was created to demonstrate my
                           reflection based on skills, projects, experiences and
                           qualifications. I have used React to build various
                           components, pages. Moreover, I've used React-Router
                           to make it multipage.
                        </p>
                     </span>
                  </Col>
               </Row>
            </div>

            <div className="myprojectlists">
               <Row className="">
                  <Col md="7">
                     <span className="info">
                        <span className="info-title fs-3">
                           Project Not To Do List
                        </span>
                        <div className="tech fs-4">
                           Techs used:{'  '}
                           <i>HTML, CSS, React, Node, Mongo</i>{' '}
                        </div>
                        <div className="links fs-4">
                           <a href="https://github.com/bzayn02">
                              <i className="fab fa-github-square"></i>
                           </a>
                        </div>
                        <p>
                           No wonder, to-do list app is omnipresent. This app is
                           one step ahead of to-do list where we can list all
                           the tasks that we do in a week. And then, we can
                           eliminate the tasks that are wasting our time and are
                           non-productive to not-to-do list. From this we can
                           know how many hours are saved so that we can really
                           focus on the tasks that are important. This project
                           is built with React in frontend and Node and Express
                           in backend.
                        </p>
                     </span>
                  </Col>
                  <Col md="5">
                     <div className="pro-img me-2">
                        <img src={portfolio} height="100%" width="90%" alt="" />
                     </div>
                  </Col>
               </Row>
            </div>
            <div className="myprojectlists mt-5">
               <Row className="py-4">
                  <Col md="5">
                     <div className="pro-img me-2">
                        <img src={portfolio} height="100%" width="90%" alt="" />
                     </div>
                  </Col>
                  <Col md="7">
                     <span className="info">
                        <span className="info-title fs-3">
                           Project Full-Stack E-Commerce
                        </span>
                        <div className="tech fs-4">
                           Techs used:{'  '}
                           <i>HTML, CSS, React, Node, Mongo</i>{' '}
                        </div>
                        <div className="links fs-4">
                           <a href="https://github.com/bzayn02">
                              <i className="fab fa-github-square"></i>
                           </a>
                        </div>
                        <p>
                           E-commerce full stack application is built with admin
                           and customer user panels. This project is huge having
                           all the necessary features that should be in any
                           e-commerce platform including registration, login,
                           authentication, validation, email-confirmation, jwt,
                           auto-login, and so on. Customer panel is still under
                           development.
                        </p>
                     </span>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   );
};
