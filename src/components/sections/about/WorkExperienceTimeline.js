import React from 'react';
import { Container } from 'react-bootstrap';

export const WorkExperienceTimeline = () => {
   return (
      <div>
         <Container>
            <h1 className="timeline-header">Work Experiences</h1>
            <div className="wrapper">
               <div className="timeline">
                  <ul>
                     <li>
                        <div className="timeline-content">
                           <h3 className="date">12th September, 2021</h3>
                           <h2 className="headings">Heading1</h2>
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Itaque ducimus architecto quae ipsam ratione
                              minus quidem dolorem consequuntur deserunt
                              pariatur.
                           </p>
                        </div>
                     </li>
                     <li>
                        <div className="timeline-content">
                           <h3 className="date">12th September, 2021</h3>
                           <h2 className="headings">Heading2</h2>
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Itaque ducimus architecto quae ipsam ratione
                              minus quidem dolorem consequuntur deserunt
                              pariatur.
                           </p>
                        </div>
                     </li>
                     <li>
                        <div className="timeline-content">
                           <h3 className="date">12th September, 2021</h3>
                           <h2 className="headings">Heading3</h2>
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Itaque ducimus architecto quae ipsam ratione
                              minus quidem dolorem consequuntur deserunt
                              pariatur.
                           </p>
                        </div>
                     </li>
                     <li>
                        <div className="timeline-content">
                           <h3 className="date">12th September, 2021</h3>
                           <h2 className="headings">Heading4</h2>
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Itaque ducimus architecto quae ipsam ratione
                              minus quidem dolorem consequuntur deserunt
                              pariatur.
                           </p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </Container>
      </div>
   );
};
