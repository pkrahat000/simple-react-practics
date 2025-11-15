import { use } from 'react'
import './React_state.css'


export default function UserData({loaderData}){
    const getData = use(loaderData)
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
        </div>
    )
}









