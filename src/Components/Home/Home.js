import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css';

const Home = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
     const url = 'https://restcountries.com/v3.1/all';
     fetch(url)
     .then(res => res.json())
     .then(data => setCountry(data)) 
    },[]);
   
    return (
        <div className='country'>
            {
                country.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Home;