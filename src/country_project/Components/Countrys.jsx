import React, { use, useState } from 'react';
import './Countrys.css'
import Country from "../Country/Country";


const Countrys = ({restAPIFunc}) => {
    const countryDatas = use(restAPIFunc)

    //1. another pase handler
    // const [visited, setVisited] = useState([])
     function handleCountryVisited (data){
        console.log('handleCountryVisited click', data)
        }

    return (
        <>
        <h1>🌏 All Country Information : {countryDatas.length}</h1>
        <div id={'boday-od-card'}>
            {
                countryDatas.map(data => <Country handleCountryVisited={handleCountryVisited} key={data.ccn3} data={data}></Country>)
            }
        </div>
        </>
    )
};

export default Countrys;
        // <div className='body'>
        //     <h1>All Country Lish : {countryDatas.length}</h1>
        //      <h1>🌏 Country Information</h1>

        //     <div class="country-card">
        //         <img class="flag" src="https://flagcdn.com/w320/bd.png" alt="Bangladesh Flag"></img>
        //         <div class="info">
        //         <h2>{countryDatas.}</h2>
        //         <p><strong>Official Name:</strong> People's Republic of Bangladesh</p>
        //         <p><strong>Capital:</strong> Dhaka</p>
        //         <p><strong>Region:</strong> Asia</p>
        //         <p><strong>Population:</strong> 171,000,000</p>
        //         <p><strong>Area:</strong> 147,570 km²</p>
        //         <p><strong>Currency:</strong> Bangladeshi Taka (BDT)</p>
        //         <p><strong>Languages:</strong> Bengali</p>
        //         </div>
        //     </div>
        // </div>