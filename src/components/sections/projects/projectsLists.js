import React from 'react'
import {Row, Col, } from 'react-bootstrap'

export const projectsLists = () => {
    return (
        <div>
             <Row className="my-4">
                    
                    <Col md="5">
                        <div class="pro-img me-2">
                            <img src={portfolio} height="100%" width="90%" alt="" />
                        </div>
                    </Col>
                    <Col md="7">
                    <div class="mb-4">
                        
                            <div class="info">
                                <div class="info-title fs-3">Project Portfolio</div>
                                <div class="tech fs-4">Techs used.</div>
                                <div class="links fs-4">
                                    <a href=""><i class="fab fa-github-square"></i></a>
                                    <a href="">
                                        <i class="fab fa-chrome"></i>
                                    </a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum necessitatibus ullam eum et voluptatibus. Repellendus maiores similique quae in provident!</p>
                            </div>
                        </div>
                    </Col>
                    
                    
                </Row>
        </div>
    )
}
