import React, { Fragment } from 'react'
import Navbar from './Navbar'

const Footer = () => {
  return (
    <div>Footer</div>
  );
}

export default Footer 

export let EndFooter = () =>{
  return(
    <p> end Footer</p>
  );
}
export let F = ()=>{
  return (
  <h1>hello</h1>
  );
}

const Footers = () =>{
  return(
    <>
    <Fragment>
      <h1 style={{ backgroundColor: "red" }}>
        Welcome
      </h1>
      <p>
        Vishnu Kanth
      </p>
    </Fragment>
    </>
  );
}