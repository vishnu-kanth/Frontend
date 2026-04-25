// import React, { useState } from 'react'

// const User = () => {
//   let users = ["Varun","Vignes","Rishi","Vishnu"];
//   let [user, changeUser] = useState(users);

//   return (
//     <div>
//       {
//         user.map((u, index) => (
            

//                 <h2 key={index}>{u}</h2>
//         ))
//       }
//     </div>
//   )
// }


// export default User

// !-- Passing Object

// import { useState } from 'react';

// const App = () => {
//   const [user, setUser] = useState({
//     userName: 'Vishnu',
//     marks: 99
//   });

//   console.log(user);

//   const updateMarks = () => {
//     setUser({ ...user,marks:user.marks+1 });
//   };

//   return (
//     <div>
//       <h2>{user.userName} {user.marks}</h2>
//       <button onClick={updateMarks}>Increment Score</button>
//     </div>
//   );
// };

// export default App;

// !-- Pass Null as State

// import {useState} from 'react'

// const App = () => {
//     let [data,setData]=useState(null);
//     console.log(data);


//   return (
//     <div>

//         {
//         data?<h3>{data}</h3> : <h3>Data is Loading</h3> // Ternanry Operator 
//         }

//         <button onClick={()=>setData('Data Loaded...')}>Refresh</button>
        
//     </div>
//   )
// }



// export default App




import { useState } from 'react';

const App = () => {
  const [color, setColor] = useState(null); 

  return (
    
    <div
      style={{
        height: '100vh',
        backgroundColor: color || 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px' 
      }}
    >
      <h2>Click To Change Background Color</h2>

      <div>

        <button onClick={() => setColor('red')}>Red</button>

        <button onClick={() => setColor('black')}>Black</button>

        <button onClick={() => setColor('yellow')}>Yellow</button>

        <button onClick={() => setColor('blue')}>Blue</button>

      </div>

    </div>
  );
};


export default App; 




