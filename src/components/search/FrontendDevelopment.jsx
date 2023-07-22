import React from "react";
import './Front-end Development.css'
const HorizontalCard = () => {
  return (

 <div className="front-end-div-right-side">
      <div className="front-end-div-block">
          <h4 className="front-end-div-heading " >Front end development</h4>
          <p className="front-end-div-name">khadija Saif <span className="front-end-div-name-looking">is looking for a mentor</span> </p>

          <p className="front-end-div-desc"> i’m a recent computer science graduate from khartoum university, intrested in front end 
          <br/>
          development and UI / UX 
          <br/> 
          looking for a mentor to guide me through becoming a proficional front end developer
          </p>
          <span className="front-end-div-readMore">... Read more </span>
          <div className="front-end-div-left-side">
          <button class="btn-front-viewDetails ">View details</button> 
          <button class="btn-front-mentor ">Mentor</button>
          <div className="d-flex ">

            <div className="front-end-div-left-side-info ">
                  <p className="front-end-div-left-side-duration"> Duration
                  <span className="front-end-div-left-side-duration-span">: 2 month
                  </span>
                  </p>
                  <p className="front-end-div-left-side-looking"> Looking for a job <span className="front-end-div-left-side-looking-span">: yes
                  </span>
                  </p>

          </div>
            <div className="front-end-div-left-side-info  front-end-div-left-side-info-paid" >
                  <p className="front-end-div-left-side-duration"> Paid
                  <span className="front-end-div-left-side-duration-span">: yes
                  </span>
                  </p>
                  <p className="front-end-div-left-side-looking"> Experience
                  <span className="front-end-div-left-side-looking-span">: none
                  </span>
                  </p>
          </div>
          </div>
          
          </div>
        
      </div>

 </div>
  );
};

export default HorizontalCard;