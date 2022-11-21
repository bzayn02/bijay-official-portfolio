import React from 'react';
import { Container } from 'react-bootstrap';
import './about.style.css';

export const QualificationTimeline = () => {
   return (
      <Container>
         <h1 className="timeline-header mt-5">Qualifications</h1>
         <div className="wrapper">
            <div className="timeline">
               <ul>
                  <li>
                     <div className="timeline-content">
                        <h3 className="date">Completed</h3>
                        <h2 className="headings">
                           Full Stack Developer Internship
                        </h2>
                        <p>RebbTech Pty Ltd</p>
                     </div>
                  </li>
                  <li>
                     <div className="timeline-content">
                        <h3 className="date">Graduated</h3>
                        <h2 className="headings">Professional Year</h2>
                        <p>
                           QIBA - Queensland International Business Academy,
                           Sydney
                        </p>
                     </div>
                  </li>
                  <li>
                     <div className="timeline-content">
                        <h3 className="date">Completed</h3>
                        <h2 className="headings">MERN Stack Bootcamp</h2>
                        <p>Dented Code Academy, Rockdale</p>
                     </div>
                  </li>
                  <li>
                     <div className="timeline-content">
                        <h3 className="date">12th July, 2021</h3>
                        <h2 className="headings">
                           Bachelor in Information Technology
                        </h2>
                        <p>Kent Institute Australia, Sydney</p>
                     </div>
                  </li>
                  <li>
                     <div className="timeline-content">
                        <h3 className="date">12th November, 2019</h3>
                        <h2 className="headings">
                           Advanced Diploma of Information Technology
                        </h2>
                        <p>
                           ACBI - Australian College of Business Intelligence,
                           Sydney
                        </p>
                     </div>
                  </li>
                  <li>
                     <div className="timeline-content">
                        <h3 className="date">12th September, 2016</h3>
                        <h2 className="headings">Year 12</h2>
                        <p>CCRC - Capital College And Research Center, Nepal</p>
                     </div>
                  </li>
                  <li>
                     <div className="timeline-content">
                        <h3 className="date">12th OCtober, 2014</h3>
                        <h2 className="headings">School Leaving Certificate</h2>
                        <p>
                           Nepal Police Higher Secondary Boarding School, Nepal
                        </p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </Container>
   );
};
