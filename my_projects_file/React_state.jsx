import { useState } from 'react';
import './React_state.css'

// ******************** Js Practics ***********************
export default function JsPactics(){
    //01........................................................distructuring methon - 1
            // const [name, years] = ['rahat', 20]
            // console.log(name, years)

    //02........................................................distructuring methon - 2
            // let x = ['rahat', 20]
            // const [name, years] = x;
            // console.log(name, years)

    //03........................................................distructuring methon - 3
            // function myFunc (){return ['rahat', 20]}
            // const [name, years] = myFunc()
            // console.log(name, years)

    //04........................................................distructuring methon - 4
            // function myFunc (initialValue){
            //     const i = initialValue;
            //         function value(changevalue){
            //             i = changevalue;
            //         }
            //         return i;
            //     }
// ############################################ [ useState use ] #####################################################
    //02........................................................MAKE A RUNS COUNT PROJECTS
    const [totalRun, setTotalRuns] = useState(0)
    const [totalSixe, setTotalSixes] = useState(0)
    const [totalFour, setTotalFour] = useState(0)
    function totalRuns(){ 
        const totalcount = totalRun + 1 ; 
        return setTotalRuns(totalcount)
    }

    function totalSixes(){
        const totalcount = totalSixe + 1;
        return setTotalSixes(totalcount), setTotalRuns(totalRun + 6)
    }
    function totalFours(){
        const totalcount = totalFour + 1;
        return setTotalFour(totalcount), setTotalRuns(totalRun + 4)
    }

    function resetRuns(){
        const totalcount = 0;
        return setTotalRuns(totalcount), setTotalSixes(totalcount), setTotalFour(totalcount)
    }

//     function 

    //02........................................................distructuring methon - 2

    return(
        <div className='body-state'>
        <div className="counter-container">
                <h1 id="runs">Total Runs : {totalRun}</h1>
                <p id="">Total Sixs : {totalSixe}</p>
                <p id="">Total Four : {totalFour}</p>
                <button onClick={totalRuns}>+1 Run</button>
                <button onClick={totalSixes}>+6 Runs</button>
                <button onClick={totalFours}>+4 Runs</button>
                <button onClick={resetRuns}>Reset</button>
        </div>
        </div>
    )
}

//Reacts useStat code likhle vs code autometically react theke useStat ke import kore dibe
// inisial mane kenono kisu hote pare. value set korte ekta option and value stot er ekta option thake



