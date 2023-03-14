import { API_URL } from '../constants';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAxios from './hooks/useAxios';


function McuHero() {

    const [data, setData] = useState({ name: {} });

    const { name } = useParams();

    const fetchDetails = () => {
        fetch("http://localhost:3001/api")
        .then(res => res.json())
        .then(data => setData(data))
    };

    useEffect(() => {
        fetchDetails();
    }, []);
    
}

export default McuHero;