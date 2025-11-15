import React, { useState } from 'react';
import './Country.css'

const Country = ({data, handleCountryVisited}) => {
        const [visited, setVisited] = useState(false)

        function clickButton (){
            // 1.toggole if else
            // if (visited === true){
            //     setVisited(false)
            // }
            // else{
            //     setVisited(true)
            // }

            // 2.toggole sturtcut
            setVisited(!visited)
            handleCountryVisited(data)
        }
        console.log(visited)
    return (
        <div>
            {/* {`boday-od-card ${visited && 'boday-od-card-visited'}`} */}
                    <div className={`body ${visited && 'boday-od-card-visited'}`}>
                        <div class={`country-card ${visited && 'country-card-visited'}`}>
                            <img class="flag" src={data.flags.png} alt="Bangladesh Flag"></img>
                            <div class="info">
                            <h2>{data.name.common}</h2>
                            <p><strong>Official Name:</strong> {data.name.official}</p>
                            <p><strong>Capital:</strong> {data.capital[0]}</p>
                            <p><strong>Region:</strong> {data.region}</p>
                            <p><strong>Population:</strong> {data.population}</p>
                            <p><strong>Area:</strong> {data.area} km²</p>
                            <p><strong>Currency:</strong> {Object.values(data.currencies)[0].name}, {Object.values(data.currencies)[0].symbol}</p>
                            <p><strong>Languages: {Object.values(data.languages)[0]}</strong> </p>
                            <button className={visited ? 'country-card' : 'country-card-visited'} onClick={clickButton}> {visited ? 'visited' : 'Not Visited'}</button>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Country;