import React from 'react'

import './hero.style.css'
import {Container, Row, Col} from 'react-bootstrap'
import bijay from "../../assets/images/bijay.png"
import { TopNavbar } from '../header/Navbar'



export const Hero = () => {
    return (
        <div className="hero">
            
            <TopNavbar />
            <hr style={{color:"white"}}/>

            <Container>
                <Row className="py-5">
                    <Col md="5">
                     <div className="pt-4">
                        <img src={bijay} width="85%" height="100%" />
                        </div>
                    </Col>
                    <Col md="7"><div className="info pt-4">
                        <p className="mt-3 mb-5 text-white"><span className="intro">Hi I'm </span><span className="name">Bijay Nagarkoti. </span></p>
                        <p className="bio text-white">I am a passionate and an enthusiastic learner. I am learning to code every single day. I love to
                        design and develop.</p>
                    </div></Col>
                </Row>
            </Container>
            
        </div>
    )
}
