import React from 'react'
import {Container, Col, Row, Card, ListGroup} from 'react-bootstrap'
import { TopNavbar } from '../../header/Navbar'
import {Title} from '../../section-title/Title'

import './contact.style.css'

export const Contact = () => {
    return (
        <div id="Contact" className="contact">
             <TopNavbar />
             <hr style={{color:"white"}}/>
            <Container>
                <Row className="pt-5">
                    <Col><Title title ="Contact" /></Col>
                </Row>
            

                <Card className="ContactLists">
				<ListGroup>
					<ListGroup.Item>
						<h3>Contact Me Via</h3>
					</ListGroup.Item>
					<ListGroup.Item>
						<a
							href="https://github.com/bzayn02"
							target="_blank"
							rel="noreferrer"
						>
							<i class="fab fa-github-square"></i>{" "}
							<span className="handlers">bzayn02</span>
						</a>
					</ListGroup.Item>
					<ListGroup.Item>
						<a
							href="https://www.linkedin.com/in/bijay-nagarkoti-831097180/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-linkedin"></i>{" "}
							<span className="handlers">bijay-nagarkoti-831097180</span>
						</a>
					</ListGroup.Item>
					<ListGroup.Item>
						<a
							href="https://twitter.com/bezayn02"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							<i className="fab fa-twitter-square"></i>
							<span className="handlers">@bezayn02</span>
						</a>
					</ListGroup.Item>
					<ListGroup.Item>
						<a
							href="https://www.facebook.com/bijay.nagarkoti.02/"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							<i className="fab fa-facebook-square"></i>
							<span className="handlers">bijay.nagarkoti.02/</span>
						</a>
					</ListGroup.Item>
					<ListGroup.Item>
						<a href="tel:040000000">
							{" "}
							<i className="fas fa-phone-square"></i>
							<span className="handlers">040000000</span>
						</a>
					</ListGroup.Item>
					<ListGroup.Item>
						<a href="mailto:nagarkotibezay02@gmail.com">
							<i className="fas fa-envelope-square"></i>
							<span className="handlers">nagarkotibezay02@gmail.com</span>
						</a>
					</ListGroup.Item>
				</ListGroup>
			</Card>
            </Container>
        </div>
    )
}
