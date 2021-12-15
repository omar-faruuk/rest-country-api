import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryInfo from '../CountryInfo/CountryInfo';

const CountryDetail = () => {
    const {countryName} = useParams();
 
    const [country, setCountry] = useState([]);
   
   
   
  
  
    useEffect(() =>{
     const url = `https://restcountries.com/v3.1/name/${countryName}`;
     fetch(url)
     .then(res => res.json())
     .then(data => setCountry(data))
    },[])
    return (
        <div>
         {
             country.map(cntr => <CountryInfo key={cntr.cca2} info={cntr}></CountryInfo>)
         }
         
           
            
        </div>
    );
};

export default CountryDetail;