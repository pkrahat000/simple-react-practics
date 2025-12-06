import React, { use, useEffect, useState } from 'react';
import Food from '../Food/Food';
import BookMark from '../BookMark/BookMark';
import { getLocalStorage, removeLocalS, setLocalStorage } from '../../utilitis/Utilitics';

 const foodDataSection =  fetch('https://www.themealdb.com/api/json/v1/1/categories.php') .then(res => res.json())


const Foods = () => {
    const fetchDatas = use(foodDataSection)
    const fetchData = fetchDatas.categories

    const [bookMarkData, setBookMarkData] = useState([])
    function bookMark(props){
        setBookMarkData([...bookMarkData , props] )
        setLocalStorage(props.idCategory)
    }


    // const [cards, setCard] = useState([])
    const card = [];
    useEffect(() => {
        const i = getLocalStorage()
        for (const  data of i){
            // console.log(data);
            const find = fetchData.find( allCardData => allCardData.idCategory === data)
            if(find){
                // setCard([...cards, find])
                card.push(find)
            }
// console.log(card);
        }
        setBookMarkData(card)
    } ,[])
    

    const removeBookmark = (id) => { 
        // console.log(bookMarkData , id);
        const remove = bookMarkData.filter(data => data.idCategory !== id)
        setBookMarkData(remove)
        removeLocalS(id)
    }


    return (
        <div style={{display: 'flex'}}>
            <div style={{display : 'grid', gridTemplateColumns:' 1fr 1fr 1fr', width:'3/4'}}>
                {
                    fetchData.map(data => <Food data={data} bookMark={bookMark} ></Food>)
                }
            </div>
            <div style={{width:'1/4'}}>
                <h1>Card Section : {bookMarkData.length}</h1>
                <div>
                    {
                        bookMarkData.map(data => <BookMark data={data} removeBookmark={removeBookmark}></BookMark>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Foods;