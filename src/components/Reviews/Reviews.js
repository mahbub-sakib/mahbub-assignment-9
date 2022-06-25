import React from 'react';
import { Card } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews([]);
    const renderCard = (reviews, index) => {
        return (
            <Card key={index} >
                <Card.Img variant="top" className='card_img ' src={`./images/users/user-${reviews.id}.jpg`} />
                <Card.Body>
                    <Card.Title>Name: {reviews.name}</Card.Title>
                    <Card.Text>
                        Description: {reviews.desc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Ratings: {reviews.rating}</small>
                </Card.Footer>
            </Card>
        )
    }
    return (
        <div className='use-grid mt-5'>
            {reviews.map(renderCard)}
        </div>
    );
};

export default Reviews;