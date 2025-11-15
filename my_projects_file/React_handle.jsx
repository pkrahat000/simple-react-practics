// *********************************Event Handler*******************************

// Event Handler(function) code likha jay 1. function and return er majhe 2.inline (html e attribute hisebe likha jay) 
// normal js call korte "" and jsx e function call korle {} use kora hoy.
// function call korte () use kora jabe na. () use korle react code run kore dey click charai

//01........................................................methon - 1. Inline function
export default function HandleClick(){
    return(
        <button onClick={function i() {
            alert('inline Function')
        }}>Inline Handle Button</button>
    )
}


//02........................................................methon - 2. Internal function
// export default function HandleClick(){
//     function Button(){
//      alert('Internal Handle Button')
//     }
//     return(
//         <button onClick={Button}>Internal Handle Button</button>
//     )
// }


//03........................................................methon - 3. Internal Arrow function
// export default function ArrowFunc(){
//     const i = () =>{
//         alert('Internal Arrow function')
//     }
//     return(
//         <button onClick={i} type="button">Arrow Function</button>
//     )
// }


//04........................................................methon - 4. Inline Arrow function
// export default function ArrowFunc(){
//     return(
//         <button onClick={() => {alert('Inline Arrow function')}} type="button">Inline Arrow function</button>
//     )
// }


//05........................................................methon - 5. Inline Arrow function with parameter
// export default function ArrowFunc(){
//     const i = (para) =>{
//         alert(para)
//     }
//     return(
//         <button onClick={() => i('i am paramiter')} type="button">paramiter use by Arrow Function</button>
//     )
// }