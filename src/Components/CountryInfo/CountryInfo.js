import React from 'react';

const CountryInfo = (props) => {
    const country = props.info;
    console.log(country);
    const {name,capital, region, flags} = country
    return (
        <div>
            <h2>this is country info</h2>
            <h1>Name: {name.common}</h1>
            <h1>Capital: {capital}</h1>
            <h1>Region: {region}</h1>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default CountryInfo;