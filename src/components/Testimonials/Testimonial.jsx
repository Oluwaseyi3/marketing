import React from 'react'
import "./Testimonial.css"
import ger from "../images/ger.jpg"
import second from "../images/second.jpg"
import third from "../images/third.jpg"


const Testimonial = () => {
  return (
    <div>
       <div className='second-box'>

<div className='flex-rows'>
 <div className='container-box'>
    <img src={ger} alt=""     />
    <img src={second} alt=""   />
    <img src={third} alt=""    />
  </div>

  
  <div className='container-box-textbox'>
     <h4>Here's Inneh Joseph…</h4>
     <h4>He went from a broke NYSC graduate...</h4>
     <h4>...to making Millions in few months.</h4>
     <h4>He now travels all over the world holding conferences and helping youths in Nigeria to say bye bye to poverty…</h4>
  </div>
</div>
  
 </div>


    <div className='white-box'>
        <div  className='white-box-body1'>
          <h3>Nigerian Government will shame you...</h3>
          <h5>The Nigerian economy is currently one of the largest in Africa. </h5>
          <h5>Since the late 1960s it has been based primarily on the petroleum industry.  </h5>
          <h5>"Oye Money" as Nigerians would call it... a Cliché for Oil Money </h5>
          <h5>Used to be very common in the mouth of Nigerians seeking Financial freedom...</h5>
          <h5>Since 1973, this has produced rapid economic growth in transportation, construction, manufacturing, and government services…</h5>
          <h5>Nigeria was changing, there appeared to be light at the tunnel.</h5>
          <h5>Crude Oil did this, It became the black Gold of the Country…</h5>
        </div>


        <div  className='white-box-body1'>
          <h3>	A Blessing or a Curse ?</h3>
          <h5>The Oil and gas industry in Nigeria contributed to about 95% of the Nigerian foreign exchange earnings,  </h5>
          <h5>...over 60% of the country’s national yearly budgetary revenue, and 15% of the gross domestic product (GDP)..  </h5>
          <h5>Since 1960, Nigeria has reaped an estimated US$600 billion in oil revenue.</h5>
          <h5>Okay, I'll forget about all the grammar and numbers,</h5>
          <h5>But see ehhn...</h5>
          <h5>Nigeria still has the third highest number of poor people in the world, after China and India. </h5>
          <h5>The number of Jobless youths keeps increasing, people leave Universities with no hope of a better tomorrow... </h5>
          <h5>The greed of Politicians and the ruling class has left the country blind and bed ridden…</h5>
          <h5>This systemic corruption has lead to indebtedness, poverty and under-development in the country today. </h5>
          <h5>A prodigal nation!</h5>
          <h5>How does an average youth survive in these times? </h5>


        </div>
        <div>
          
        </div>
    </div>
    </div>
    
  )
}

export default Testimonial