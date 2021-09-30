import React from 'react';
import { Container } from 'react-bootstrap';
import './about.style.css';

export const QualificationTimeline = () => {
   return (
      <Container>
         <h1 className="timeline-header">Qualifications</h1>
         <div className="wrapper">
            <div className="timeline">
               <ul>
                  <li>
                     <div className="timeline-content">
                        <h3 className="date">Now</h3>
                        <h2 className="headings">MERN Stack Bootcamp</h2>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Itaque ducimus architecto quae ipsam ratione
                        </p>
                     </div>
                  </li>
                  <li>
                     <div className="timeline-content">
                        <h3 className="date">12th July, 2021</h3>
                        <h2 className="headings">
                           Bachelor in Information Technology
                        </h2>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Itaque ducimus architecto quae ipsam ratione
                        </p>
                     </div>
                  </li>
                  <li>
                     <div className="timeline-content">
                        <h3 className="date">12th November, 2019</h3>
                        <h2 className="headings">Advanced Diploma</h2>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Itaque ducimus architecto quae ipsam ratione
                        </p>
                     </div>
                  </li>
                  <li>
                     <div className="timeline-content">
                        <h3 className="date">12th September, 2016</h3>
                        <h2 className="headings">Year 12</h2>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Itaque ducimus architecto quae ipsam ratione
                        </p>
                     </div>
                  </li>
                  <li>
                     <div className="timeline-content">
                        <h3 className="date">12th OCtober, 2014</h3>
                        <h2 className="headings">School Leaving Certificate</h2>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Itaque ducimus architecto quae ipsam ratione
                        </p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </Container>
   );
};
