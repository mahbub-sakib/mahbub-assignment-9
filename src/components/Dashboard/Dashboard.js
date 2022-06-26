import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';


const Dashboard = () => {
    return (
        <div className='container'>
            <MyLineChart></MyLineChart>
            <h3>Fig: A Line chart of invetstment vs revenue for each month</h3>
            <MyBarChart></MyBarChart>
            <h3 className='mb-5'>Fig: A Bar chart of Sales for each month</h3>
        </div>
    );
};

export default Dashboard;