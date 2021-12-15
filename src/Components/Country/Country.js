import React from 'react';
import { useHistory } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const { capital, flags } = props.country;
    const name = props.country.name.common;
   

    const history = useHistory()
    const handleClick =(name) =>{
        history.push(`/name/${name}`)
    }
    return (
        <div className='countryDetails'>
            <img src={flags.png} alt="" />
            <h2>Name: {name}</h2>
            <p>capital: {capital}</p>
            <button onClick={() => handleClick(name)}>more details..</button>

        </div>
    );
};

export default Country;