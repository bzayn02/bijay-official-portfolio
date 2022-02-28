import React from 'react';

import './hero.style.css';
import { Container, Button } from 'react-bootstrap';
import bijay from '../../assets/images/bijay.png';
import { Link } from 'react-router-dom';

export const Hero = () => {
   return (
      <div className="hero">
         <Container>
            <div className="portfolio-hero">
               <div className="introduction">
                  {' '}
                  <span className="intro">Hi I'm </span> <br />
                  <span className="name">Bijay Nagarkoti. </span>
                  <br />
                  <span className="dev">A Full Stack Web Developer</span>
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
               </div>

               <div>
                  <img className="profile-image" src={bijay} alt="heroimg" />
               </div>
            </div>
         </Container>{' '}
      </div>
   );
};
