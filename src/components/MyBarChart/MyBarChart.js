import React, { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import axios from 'axios';

const MyBarChart = () => {
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
            <BarChart className='m-5' width={800} height={400} data={stats}>
                <Bar dataKey="sell" fill="#8884d8" />
                <XAxis dataKey={'month'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </BarChart>
        </ResponsiveContainer>

    );
};

export default MyBarChart;