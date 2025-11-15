// import { use } from 'react'
import './App.css'
import Myfil from '../my_projects_file/Myfile'
import HandlePractics from '../my_projects_file/React_handle'
import React_state from '../my_projects_file/react_state'
import Users from '../my_projects_file/Users'
import { Suspense } from 'react'
import Countrys from './country_project/Components/Countrys'


function App() {
  //  const loaderData = fetch('https://jsonplaceholder.typicode.com/users') .then(res => res.json())

      const loaderData = async()=>{
        const getData = await fetch('https:jsonplaceholder.typicode.com/users').then(res => res.json())
        return getData
    }
    const i = loaderData()


    let countryRestAPI =async ()=>{
      const countryDetails = await fetch('https://restcountries.com/v3.1/independent?status=true').then(res => res.json())
      return countryDetails
    }
    const restAPIFunc = countryRestAPI()
  
  return (
    <>
      <Developer id='01' name='Rahat' position='Developer'></Developer>
      <DataCenterHeading data='Data Center'></DataCenterHeading>
      <FinalCard></FinalCard>
      {/* <Myfil name='Rahat' work='student' job='no'></Myfil>
      <Myfil name='Rana' work='Mistury' job='yes'></Myfil>
      <Myfil name='' work='Bekar' ></Myfil> */}
      {/* <HandlePractics></HandlePractics> */}
      <React_state></React_state>
      {/* <Suspense fallback={<h1>Loading...</h1>}>
        <Users loaderDatas={loaderData}></Users>
      </Suspense> */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Users loaderData={i}></Users>
      </Suspense>


      <Suspense fallback={<h1>Country comming from country rest API</h1>}>
        <Countrys key={restAPIFunc} restAPIFunc={restAPIFunc}></Countrys>
      </Suspense>


    </>
  )
}


function Developer(props){
  // props object dekha
  // console.log(props)

  //internal css
  const classx = { backgroundColor : 'red', color : 'white' }
  
  //destructuring simple way
  const { name } = {id:'01', name:'Rahat', position:'Develoer'}
  return(
    <div className='navbar'>
      <h3 className='class'>Developer ID : {props.id}</h3>
      <h5 style={classx}>Developer Name : {name}</h5>
      {/* inline css */}
      <h5 style={{fontWeight : 'normal'}}>Position : {props.position}</h5> 
    </div>
  )
}

  
function DataCenterHeading({data, value = ':'}){
  //destructuring advance way and props na thakle default value
  return(
    <>
      <h2>{data } {value}</h2>
    </>
  )
}


function FinalCard(){
  return(
    <div className='manyCard'>
      <Card img='https://cdn.pixabay.com/photo/2018/04/06/09/25/woman-3295326_1280.jpg' name='রাকিব হোসেন' year='২৫' place='ঢাকা' collage='ঢাকা বিশ্ববিদ্যালয়' trade='কম্পিউটার সায়েন্স' gpa='৩.৮৯' company='TechZone Ltd.' position='সফটওয়্যার ইঞ্জিনিয়ার' exprience='৩ বছর' phone='০১৭XXXXXXXX' email='rakib@example.com'></Card>

      <Card img='https://cdn.pixabay.com/photo/2017/06/14/21/27/black-white-2403456_1280.jpg' name='Rahat Hossain' year='20' place='Madaripur' collage='DESGPI' trade='civil technology' gpa='4.00' company='TechZone Ltd.' position='civil Engineer' exprience='৩ বছর' phone='০১৭XXXXXXXX' email='rahat@example.com'></Card>
      
      <Card img='https://media.istockphoto.com/id/519362311/photo/fit-and-confident.jpg?s=1024x1024&w=is&k=20&c=7OuWbE-6-qNAJ-ybgoYurDwgKP_6yABeXoSzUNYR0eA=' name='Urmi Akhter' year='19' place='Madaripur' collage='HIGHLAND BD' trade='কম্পিউটার সায়েন্স' gpa='3.99' company='TechZone Ltd.' position='সফটওয়্যার ইঞ্জিনিয়ার' exprience='৩ বছর' phone='০১৭XXXXXXXX' email='urmi@example.com'></Card>
    </div>
  )
}


function Card(props){
  console.log(props.img)
  return(
<>
<div className='main-card'>
  <div class="card">
    <div class="card-header">
      <img src={[props.img]} alt="Header Image"></img>
      <h2>ডেটা কার্ড</h2>
    </div>

    <div class="card-section">
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile Icon" class="icon"></img>
      <div class="section-text">
        <div class="section-title">ব্যক্তিগত তথ্য</div>
        <div class="section-content">
          নাম: {props.name}<br></br>
          বয়স: {props.year}<br></br>
          অবস্থান: {props.place}
        </div>
      </div>
    </div>

    <div class="card-section">
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" alt="Education Icon" class="icon"></img>
      <div class="section-text">
        <div class="section-title">একাডেমিক তথ্য</div>
        <div class="section-content">
          প্রতিষ্ঠান: {props.collage}<br></br>
          বিভাগ: {props.trade}<br></br>
          সিজিপিএ: {props.gpa}
        </div>
      </div>
    </div>

    <div class="card-section">
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="Work Icon" class="icon"></img>
      <div class="section-text">
        <div class="section-title">পেশাগত অভিজ্ঞতা</div>
        <div class="section-content">
          কোম্পানি: {props.company}<br></br>
          পদ: {props.position}<br></br>
          অভিজ্ঞতা: {props.exprience}
        </div>
      </div>
    </div>

    <div class="card-section">
      <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Contact Icon" class="icon"></img>
      <div class="section-text">
        <div class="section-title">যোগাযোগ</div>
        <div class="section-content">
          ফোন: {props.phone}<br></br>
          ইমেইল: {props.email}
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}



export default App
