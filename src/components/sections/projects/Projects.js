import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Title } from '../../section-title/Title'
import portfolio from '../../../assets/images/Mask Group.png'


import './projects.style.css'
import { TopNavbar } from '../../header/Navbar'

export const Projects = () => {
    return (
        <div id= "Projects" className="projects">
             <TopNavbar />
             <hr style={{color:"white"}}/>
            <Container>
                <Row className="pt-5">
                    <Col>
                    <Title title = "Projects" />
                    </Col>
                </Row>
                <Row className="py-4">
                    
                    <Col md="5">
                        <div class="pro-img me-2">
                            <img src={portfolio} height="100%" width="90%" alt="" />
                        </div>
                    </Col>
                    <Col md="7">
                    <div className="mb-4">
                        
                            <div className="info">
                                <div className="info-title fs-3">Project Portfolio</div>
                                <div className="tech fs-4">Techs used.</div>
                                <div className="links fs-4">
                                    <a href=""><i className="fab fa-github-square"></i></a>
                                    <a href="">
                                        <i className="fab fa-chrome"></i>
                                    </a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum necessitatibus ullam eum et voluptatibus. Repellendus maiores similique quae in provident!</p>
                            </div>
                        </div>
                    </Col>
                    
                    
                </Row>

                <hr />

                <Row className="my-4">
                <Col md="7">
                    <div className="mb-4">
                        
                            <div className="info">
                                <div className="info-title fs-3">Project Portfolio</div>
                                <div className="tech fs-4">Techs used.</div>
                                <div className="links fs-4">
                                    <a href=""><i className="fab fa-github-square"></i></a>
                                    <a href="">
                                        <i className="fab fa-chrome"></i>
                                    </a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum necessitatibus ullam eum et voluptatibus. Repellendus maiores similique quae in provident!</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="5">
                        <div className="pro-img me-2">
                            <img src={portfolio} height="100%" width="90%" alt="" />
                        </div>
                    </Col>
                </Row>

                <hr />

                <Row className="py-4">
                    
                    <Col md="5">
                        <div className="pro-img me-2">
                            <img src={portfolio} height="100%" width="90%" alt="" />
                        </div>
                    </Col>
                    <Col md="7">
                    <div className="pb-4">
                        
                            <div className="info">
                                <div className="info-title fs-3">Project Portfolio</div>
                                <div className="tech fs-4">Techs used.</div>
                                <div className="links fs-4">
                                    <a href=""><i className="fab fa-github-square"></i></a>
                                    <a href="">
                                        <i className="fab fa-chrome"></i>
                                    </a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum necessitatibus ullam eum et voluptatibus. Repellendus maiores similique quae in provident!</p>
                            </div>
                        </div>
                    </Col>
                    
                    
                </Row>
            </Container>
        </div>
    )
}
