import React from 'react'
import {Card} from 'react-bootstrap'

export const SkillsCards = ({cardTitle, cardSubTitle, cardText}) => {
    return (
        <div className="skillscards">
             <Card className="my-3">
  <Card.Body>
    <Card.Title className="cardTitle">{cardTitle}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted cardSubTitle">{cardSubTitle}</Card.Subtitle>
    <Card.Text className="cardText">
      {cardText}
    </Card.Text>
  </Card.Body>
</Card>
          
        </div>
    )
}
