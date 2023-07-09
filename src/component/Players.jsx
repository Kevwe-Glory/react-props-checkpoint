import React from 'react'
import {Card} from 'react-bootstrap'

// import players from '../players';

const Players = ({name, team, imageUrl, nationality, jerseryNumber, age}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} style={{minWidth:"280px", maxWidth:"290px", maxHeight:"250px", minHeight:"250px", width: "100%"}}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {team}
                </Card.Text>
                <Card.Text>
                    {nationality}
                </Card.Text>
                <Card.Text>
                    {jerseryNumber}
                </Card.Text>
                <Card.Text>
                    {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Players