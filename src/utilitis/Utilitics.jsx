
// localstorage e data set kora
// 1. setDataLocalStorage function ke call kora fetch er id soho
// 2. id ke JSON.stringify kore Json e convert kora.
// 3. setItem('key', value ) diye data sewt kora
const setDataLocalStorage = (id) => {
    const i = getDataLocalStorage()
    const p = [...i, id] 
    const y = JSON.stringify(p)
    localStorage.setItem('card', y)
    // console.log(localStorage.getItem('card'));
}



// localstorage theke data get kora
// 1. useEffect use kora for data pauyar jonno
// 2. getItem('key') diye data find kora
// 3. data na thakle empty array dekhabe
const getDataLocalStorage = (getData) => {
    const i = localStorage.getItem('card')
    if(i){
        const getDataConvert = JSON.parse(i)
        return getDataConvert
    }
    return []
}



const removeLocalStorage = id => {
    const getDataConvert = getDataLocalStorage()
    const filterData = getDataConvert.filter(data => data !== id)
    const y = JSON.stringify(filterData)
    localStorage.setItem('card', y)
}


export {setDataLocalStorage as setLocalStorage ,
        getDataLocalStorage as getLocalStorage,
        removeLocalStorage as removeLocalS
}

//localstorage theke data pete : 
// 1. local storage theke data pele if e dhukbe and Json theke string e convert korbe and data na thakle empty array [] return korbo karon nahole null pauya jay
// 2. local storage theke data pete hole