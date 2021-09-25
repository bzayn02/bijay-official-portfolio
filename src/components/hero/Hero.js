import React from 'react';

import './hero.style.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bijay from '../../assets/images/bijay.png';
import { TopNavbar } from '../header/Navbar';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="hero">
      <TopNavbar />

      <Container>
        <Row className="py-5">
          <Col md="5">
            <div className="pt-4">
              <img src={bijay} width="85%" height="100%" alt="heroimg" />
            </div>
          </Col>
          <Col md="7">
            <div className="info pt-4">
              <p className="mt-2 mb-3 text-white">
                <span className="intro">Hi I'm </span>
                <span className="name">Bijay Nagarkoti. </span>
              </p>
              <p className="bio text-white">
                I am a passionate and an enthusiastic learner. I am learning to
                code every single day. I love to design and develop.
              </p>
              <div className="hire-about py-2">
                <Button className="hire me-4">HIRE ME</Button>
                <Link to="/about">
                  <Button>Know More About Me</Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <div className="ContactLists">
          <a href="https://github.com/bzayn02" target="_blank" rel="noreferrer">
            <i class="fab fa-github-square"></i>{' '}
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
      </Container>
    </div>
  );
};
