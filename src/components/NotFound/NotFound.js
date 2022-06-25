import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        const path = `/`;
        navigate(path);
    }

    return (
        <div>
            <h1 className='mt-5'>Oops!</h1>
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for is not valid</p>

            <Button variant="primary" onClick={goToHomePage}>Go to Home Page</Button>
        </div>
    );
};

export default NotFound;