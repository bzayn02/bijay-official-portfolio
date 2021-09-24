import React from 'react'
import { Title } from '../../section-title/Title'
import {Container, Row, Col} from 'react-bootstrap'


import "./about.style.css"
import bijay from '../../../assets/images/bijay.png'
import { TopNavbar } from '../../header/Navbar'

export const About = () => {
    return (

        <div id="About" className="about">
             <TopNavbar />
             
            <Container>
                <Row className="pt-5">
                    <Col><Title title="About Me" /></Col>
                </Row>

                <Row className="py-3">
                    <Col md="5">
                    <div className="pro-img">
                            <img className="img-responsive" src={bijay} width="90%" height="100%"alt="" />
                        </div>
                    </Col>
                    <Col md="7">
                        <div className="py-2 about-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptatibus libero qui mollitia quaerat ratione autem nihil ut a. Quo facere quisquam fuga neque repellat, rerum vitae beatae reprehenderit inventore!
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ea incidunt blanditiis fugit quibusdam repellendus perspiciatis sed possimus in aspernatur? Numquam dignissimos vero officiis quod sequi magni voluptatum, repellat adipisci.</p>
                            
                        </div>
                    </Col>

                    <div>
                        
                    </div>
                </Row>
            </Container>
        </div>
    )
}
