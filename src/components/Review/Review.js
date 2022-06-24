import React from 'react';

const Review = (props) => {
    const { item } = props;
    const { name, desc, rating } = item;
    return (
        <div>
            <h2>A single review</h2>
            <p>Name: {name}</p>
            <p>Description: {desc}</p>
            <p>Ratings: {rating}</p>
        </div>
    );
};

export default Review;