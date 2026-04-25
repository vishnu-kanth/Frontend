// import { useEffect,useState } from "react";

// const App = () =>{
//     let[count,SetCount]=useState(0);
//     console.log('component mounted...');

//     useEffect(()=>{
//         console.log('effect run');
        
//     },[count])
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=>SetCount(count+1)}>increase</button>
//         </div>
//     )
    
// }

// export default App;

// !--- Fetching within UseEffect

// import { useEffect, useState } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);
//   let [data,setData] = useState([]);

//   useEffect(() => {

//     let fetchUsers = async () => {

//       try {

//         let res = await fetch('https://jsonplaceholder.typicode.com/users');
//         let data = await res.json();
//         console.log(data);
//         setData(data);
        

//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchUsers();

//   }, []);

//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(count + 1)}>click</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react'
// import Child from './Child'
// import FetchData from './FetchData'

// const App = () => {
//   const [show, setShow] = useState(true)

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Hide Components' : 'Show Components'}
//       </button>

//       {show && (
//         <>
//           <Child />
//           <FetchData />
//         </>
//       )}
//     </div>
//   )
// }

// export default App

// !-- axios

// import axios from 'axios';
// import { useEffect,useState } from 'react';

// const App = () => {
//   let [user,SetUser]=useState([]);

//   useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>SetUser(res.data))
//     .catch((err)=>console.log(err)
//   );
// },[])
    
//   return (
//     <div>
//       {user.map((u) => (
//         <p key={u.id}>{u.name}</p>
//       ))}

//     </div>
//   )
// }

// export default App 

// !-- with async wait

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUser(res.data);
      }catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {user.map((u) => (
      <p key={u.id}>{u.name}</p>
      ))}</div>
  );
};

export default App;