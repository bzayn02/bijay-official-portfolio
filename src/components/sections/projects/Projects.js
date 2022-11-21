import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Title } from '../../section-title/Title';
import portfolio from '../../../assets/images/portfolioImg.jpg';
import nottodo from '../../../assets/images/not-to-do.png';
import adminecom from '../../../assets/images/admin-ecom.png';
import tailwindcss from '../../../assets/images/tailwindcss.png';
import mediumblog from '../../../assets/images/mediumblog.png';
import expensetracker from '../../../assets/images/expensetracker.png';

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
                        <img src={nottodo} height="100%" width="90%" alt="" />
                     </div>
                  </Col>
               </Row>
            </div>

            <div className="myprojectlists mt-5">
               <Row className="py-4">
                  <Col md="5">
                     <div className="pro-img me-2">
                        <img src={adminecom} height="100%" width="90%" alt="" />
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

            <div className="myprojectlists">
               <Row className="">
                  <Col md="7">
                     <span className="info">
                        <span className="info-title fs-3">Xense Tracker</span>
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
                           Exense tracker, by it's name, this app helps us to
                           track our expenses by allowing users to record their
                           expenses by names and amounts. And at the bottom of
                           the amount, it calculates the total expenses. The
                           user has capability of inserting and deleting the
                           expenses. Also users are capable of filtering the
                           expenses between two given dates to find out how much
                           they have spent in that period of time. This app
                           allowed me to extend my knowledge in building up
                           apis, servers, routers, user interfaces and most
                           importantly user authentication features through
                           simple user login feature. I've used MERN stack to
                           build up this project.
                        </p>
                     </span>
                  </Col>
                  <Col md="5">
                     <div className="pro-img me-2">
                        <img
                           src={expensetracker}
                           height="100%"
                           width="90%"
                           alt=""
                        />
                     </div>
                  </Col>
               </Row>
            </div>

            <div className="myprojectlists mt-5">
               <Row className="py-4">
                  <Col md="5">
                     <div className="pro-img me-2">
                        <img
                           src={tailwindcss}
                           height="100%"
                           width="90%"
                           alt=""
                        />
                     </div>
                  </Col>
                  <Col md="7">
                     <span className="info">
                        <span className="info-title fs-3">
                           Tailwind Project
                        </span>
                        <div className="tech fs-4">
                           Techs used:{'  '}
                           <i>HTML, JavaScript, Tailwind CSS</i>{' '}
                        </div>
                        <div className="links fs-4">
                           <a href="https://github.com/bzayn02">
                              <i className="fab fa-github-square"></i>
                           </a>
                           <a
                              className=" m-3"
                              href="tailwind-with-react.vercel.app"
                           >
                              Link
                           </a>
                        </div>
                        <p>
                           Through this application, I extended my knowledge on
                           application of Tailwind CSS which is by far the most
                           significantly used CDN for CSS. Tailwind CSS allows
                           us to write very less custom CSS, allowing us to keep
                           the files small and make safer changes.
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
                           Medium Blog Clone
                        </span>
                        <div className="tech fs-4">
                           Techs used:{'  '}
                           <i>
                              HTML, CSS, React, NextJS, Sanity CMS, GROQ,
                              JavaScript, TypeScript
                           </i>{' '}
                        </div>
                        <div className="links fs-4">
                           <a href="https://github.com/bzayn02">
                              <i className="fab fa-github-square"></i>
                           </a>
                           <a
                              className=" m-3"
                              href="sanity-medium-blog-self.vercel.app"
                           >
                              Link
                           </a>
                        </div>
                        <p>
                           I built this application clone to understand the
                           working of blogging websites, mainly how content
                           management system works. This application gave me
                           broad knowledge on using Sanity CMS, an open source
                           CMS, which is very much flexible in terms of its user
                           interfaces allowing us to create contents with such
                           an ease.
                        </p>
                     </span>
                  </Col>
                  <Col md="5">
                     <div className="pro-img me-2">
                        <img
                           src={mediumblog}
                           height="100%"
                           width="90%"
                           alt=""
                        />
                     </div>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   );
};
