

// component er vitore map chaliye compomemt call korle key dite hoy tahole map data edit korle all data read na kore oi id dhore spacific edit kore tahole time save hoy
// container ke grid component jekhane ase okhane dite hoy kono link kora lage na


<!-- ********************** handle declare **************************** -->
// step 1 : API declare  [ fetch parent file or app.jsx file er moddhe kora. all component e use korte ]
// step 2 : <Suspense fallback={code}>component</Suspense>  [ Suspense er moddhe je component use kora hoy ta load(fetch) hote time lagle oi somoy fallback er code dekhabe [fetch data load hote time lage tai use kora hoy]]
// step 3 : fetch data send using params
// step 4 : fetch data distructruring kore receive kora.
// step 5 : distructruring data pete hole use hook use must.
// step 6 : array theke data dekhate 3steps
    //1. map kora 
    //2. data pathano another component e
    //3. data destructuring kore receive kora and use kora.


//Css use : 
//1. only component e use korle component er name a css create koar
//2. component e multiple data thakl grid korle component jekhane caall kora hoy okhane
//3. index.css e korle universal mane all jaygay


// click korle ekta kaj hobe 
//1. button er hook create *(function link kora)
//2. state e mane set kora
//3. 

//another page event handler handle
//1. satate jehkane event handler sekhane


<!-- ********************** cliend er button e click korbo parent e kaj korbe **************************** -->
//jekhane data dekhate chai sekhane function and state make kora
another page hole parameter er sahajje data pathano
destructing kore data pauya and function ke call kora and data deya
array state e add korte hole spreade operator(...) diye korte hoy
    const [visited, setVisited] = useState([])
     function handleCountryVisited (data){
        const finalData = [...visited, data]
        setVisited(finalData)
        }
    