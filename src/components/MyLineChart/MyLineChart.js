import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const MyLineChart = () => {
    const [stats, setStats] = useState([]);
    useEffect(
        () => {
            axios.get('data.json')
                .then(data => {
                    // console.log(data.data);
                    const loadedData = data.data;
                    setStats(loadedData);
                })
        }, []);
    return (
        <ResponsiveContainer width="85%" height={400}>
            <LineChart className='m-5' width={800} height={400} data={stats}>
                <Line dataKey="revenue" stroke="#8884d8"></Line>
                <Line dataKey="investment" stroke="#8884d8"></Line>
                <XAxis dataKey={'month'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MyLineChart;