import React, { use, useState } from 'react';
import './Countrys.css'
import Country from "../Country/Country";


const Countrys = ({restAPIFunc}) => {
    const countryDatas = use(restAPIFunc)

    // 1. another pase handler
    const [visited, setVisited] = useState([])
     function handleCountryVisited (data){
        const finalData = [...visited, data]
        setVisited(finalData)
        }


    return (
        <>
        <h1>🌏 All Country Information : {countryDatas.length}</h1>
        <h1>Total Country Visited : {visited.length}</h1>
        <div id={'boday-od-card'}>
            {
                countryDatas.map(data => <Country handleCountryVisited={handleCountryVisited} key={data.ccn3} data={data}></Country>)
            }
        </div>
        </>
    )
};

export default Countrys;