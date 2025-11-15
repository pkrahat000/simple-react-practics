
//conditional rendaring 
    // 1. condition ? true : false  // condition true hole 1st code chole false hole 2nd code cholbe.
    // 2. condition && true          // condition true hole cholbe.
    // 3. condition || false         // condition false hole cholbe.
    // 4. condition ==               // 




export default function Name ({job, name, work}) {
    let i ;
    let x ;
    let y ;
        if(name === 'Rahat', job === 'yes', work === 'student' ){
            i = name;
            x = job;
            y = work;
        }
        else if (name, job, work) {
            i = 'apni Rahat Na';
            x = 'jobs nai apnar';
            y = 'apni student Na';
        }
        else{i = 'No Name Available';}
    return (
        <>
        <div style={{border:'1px solid red', borderRadius:'10px', padding: '50px', marginTop:'20px'}}>
        <li>My Name Is : {i}</li>
        <li>My job Is : {x}</li>
        <li>My work Is : {y}</li>
        </div>
        </>
    );
}



