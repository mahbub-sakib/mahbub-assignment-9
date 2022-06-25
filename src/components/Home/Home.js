import React from 'react';
import './Home.css';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { Button, CardGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReviews([]);
    const navigate = useNavigate();
    const getSomeReview = () => {
        let content = [];
        if (reviews.length != 0) {
            for (let i = 0; i < 3; i++) {
                const item = reviews[i];
                content.push(<Review key={item.id} item={item}></Review>);
            }
            return content;
        }
    }

    const goToReviewPage = () => {
        const path = `/reviews`;
        navigate(path);
    }
    return (
        <div>
            <div className='row mt-5 d-flex align-items-center justify-content-center'>

                <div className='col-md-5 px-5 d-flex flex-column align-items-start justify-content-center'>
                    <h1>Rate The Furniture</h1>
                    <h1>Get The Furniture</h1>
                    <p className='text-start'>Our aims to offer a unique variety of traditional and contemporary designs at a reasonable price and is determined to provide the best services to our valued customers, even after sales. We hope this would further enhance our brand across borders.</p>

                </div>

                <div className='col-md-5  '>
                    <img src="./images/canvas-image.jpg" className='canvas-image' alt="" />
                </div>
            </div>
            <div className='mt-5 container'>
                <h1>Customer Reviews(3)</h1>
                <CardGroup>
                    {getSomeReview()}
                </CardGroup>

                <Button variant="primary" className='m-3' onClick={goToReviewPage}>See All Reviews</Button>

            </div>

        </div>
    );
};

export default Home;