import { use } from 'react'
import './React_state.css'

// 1   : api = https://jsonplaceholder.typicode.com/users       [json theke fake api neya]
// 2   : api er data ke fetch kori                           

// fetch(https://jsonplaceholder.typicode.com/users) 
// .then(res => res.json())                                     [api ke json e convert kora] 
// .then(data => console.log(data))                             [kono kaj kora]

// const loadData = async() => {
//         const res = await fetch(https:jsonplaceholder.typicode.com/users)
//         const data = res.json()
//         return data
// }

//<Suspense fallback={<Loading />}> er moddhe data load na hole tokhon fallback loading dekhabe


// export default function UserData({loaderDatas}){
//     const users = use(loaderDatas)  //fetch data array hisebe pauyar jonno
//     console.log(users)
//     return(
//         <div className='counter-container'>
//         <h1 className=''>User Data Controll : {users.length}</h1>
//         </div>
//     )
// }






export default function UserData({loaderData}){
    const getData = use(loaderData)
    console.log(getData)
    console.log(getData.length)
    return(
        
        <div id='user-body'>
            {
            getData.map(data => (
                <div class="card">
                    <h2>Chelsey Dietrich</h2>
                    <p><strong>Username:</strong> {data.name}</p>
                    <p><strong>Email:</strong> <a href="mailto:Lucio_Hettinger@annie.ca">{data.email}</a></p>
                    <p><strong>Phone:</strong> {data.phone}</p>
                    <p><strong>Website:</strong> <a href="http://demarco.info" target="_blank">{data.website}</a></p>
                    
                    <p class="section-title">Address</p>
                    <p>{data.address.street}, {data.address.suite}</p>
                    <p>{data.address.city}, {data.address.zipcode}</p>

                    <p class="section-title">Company</p>
                    <p><strong>Name:</strong> {data.company.name}</p>
                    <p><strong>CatchPhrase:</strong> {data.company.catchPhrase}</p>
                    <p><strong>BS:</strong> {data.company.bs}</p>
                </div>
                        
                    ))
                }
            {/* <div class="card">
                <h2>Chelsey Dietrich</h2>
                <p><strong>Username:</strong> Kamren</p>
                <p><strong>Email:</strong> <a href="mailto:Lucio_Hettinger@annie.ca">Lucio_Hettinger@annie.ca</a></p>
                <p><strong>Phone:</strong> (254)954-1289</p>
                <p><strong>Website:</strong> <a href="http://demarco.info" target="_blank">demarco.info</a></p>
                
                <p class="section-title">Address</p>
                <p>Skiles Walks, Suite 351</p>
                <p>Roscoeview, 33263</p>

                <p class="section-title">Company</p>
                <p><strong>Name:</strong> Keebler LLC</p>
                <p><strong>CatchPhrase:</strong> User-centric fault-tolerant solution</p>
                <p><strong>BS:</strong> revolutionize end-to-end systems</p>
            </div> */}
        </div>
    )
}









