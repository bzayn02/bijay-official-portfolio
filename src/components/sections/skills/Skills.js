import React from 'react'
import {Container,  Row, Col} from 'react-bootstrap'
import {Title} from "../../section-title/Title"
import {SkillsCards} from "./SkillsCards"

import './skills.style.css'
import { TopNavbar } from '../../header/Navbar'

export const Skills = () => {
    return (
        
        <div className="Skills" id="Skills">
             <TopNavbar />
             <hr style={{color:"white"}}/>
            
            <Container>

                

                <Row className="pt-5">
                    <Col className="skills">
                    <Title title="Skills" />
<div className="skillslists d-flex justify-content-around flex-wrap py-4">
                    <SkillsCards cardTitle={<i className='icons fab fa-html5' style={{color:"red"}}/>} cardSubTitle="HTML" cardText= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptatibus libero qui mollitia quaerat ratione autem nihil ut a."/>
                <SkillsCards cardTitle={<i class="icons fab fa-css3-alt" style={{color:"blue"}}></i>} cardSubTitle="CSS" cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptatibus libero qui mollitia quaerat ratione autem nihil ut a."/>
                <SkillsCards cardTitle={<i class="fab fa-js icons" style={{color:"rgb(185, 148, 26)"}}></i>} cardSubTitle="Javascript" cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptatibus libero qui mollitia quaerat ratione autem nihil ut a."/>
                <SkillsCards cardTitle={<i class="fab fa-bootstrap icons" style={{color:"violet"}}></i>} cardSubTitle="Bootstrap" cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptatibus libero qui mollitia quaerat ratione autem nihil ut a."/>
                <SkillsCards cardTitle={<i class="fab fa-react icons" style={{color:"green"}}></i>} cardSubTitle="React" cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptatibus libero qui mollitia quaerat ratione autem nihil ut a."/></div>
                    
            
                
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
