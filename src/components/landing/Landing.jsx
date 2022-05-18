import React from 'react'
import "./landing.css"
import business from "../images/business.jpg"


const landing = () => {
  return (
    <div className='landing-box'>
       <div className='first-box'>
        <h2>The Single Secret of the Smartest Network of Young Authentic Online Millionaires In Nigeria, use this secret to Unleash hell on Poverty forever!</h2> 
        <p>Seasoned Copywriter swears under oath that this is the embryonic stage of another "Oil boom" in Nigeria…</p>
        <p>In 3 years this Business model has produced more Youth Millionaires in Nigeria than the Nigerian Government has done in 60…</p>
        <button><a href='http://wa.link/gww6le'>Show Me Immediately</a></button>
       </div>
 
       <div> 
         <img src={business} alt="" className='box' />
       </div>
    </div>
  )
}

export default landing