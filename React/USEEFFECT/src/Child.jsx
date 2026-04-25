import React,{useEffect} from 'react'

const Child = () => {

    useEffect(()=>{
        console.log('Effect started..');

        let interval = setInterval(()=>{
            console.log('running..');
            
        },1000);

        return()=>{

            console.log('cleanup called..');
            clearInterval(interval)

            
        }
        
    },[])

  return (
    <div>Child</div>
  )

}

export default Child