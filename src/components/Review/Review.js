import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css';

const Review = (props) => {
    const { item } = props;
    const { id, name, desc, rating } = item;
    const image_location = `./images/users/user-${id}.jpg`;
    return (
        <Card >
            <Card.Img variant="top" className='card_img' src={image_location} />
            <Card.Body>
                <Card.Title>Name: {name}</Card.Title>
                <Card.Text>
                    Description: {desc}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Ratings: {rating}</small>
            </Card.Footer>
        </Card>
    );
};

export default Review;