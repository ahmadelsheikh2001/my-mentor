import React from 'react'

const Opportunitysidebar = ({selected}) => {
  return (
    <div className='sidebar-content'>
        <div className="line computer-filter"> 
            <h4>Filters</h4>
            <p class="black-reguar-txt-mediam clear-all">Clear All</p>
        </div>
        <div className='rating'>
            <div className={selected=="Requests"?"d-none":"line"}>
              <p className="black-reguar-txt-mediam">Certificate</p>
              <div>
              <label className="general-checkbox-container">
                <input type="checkbox"/>
                <span class="general-checkmark"></span>
              </label>
              </div>
            </div>
            <div className="line">
              <p className="black-reguar-txt-mediam">Paid</p>
              <div>
              <label className="general-checkbox-container">
                <input type="checkbox"/>
                <span class="general-checkmark"></span>
              </label>
              </div>
            </div>
            <div className="line">
              <p className="black-reguar-txt-mediam">Hiring Possibility</p>
              <div>
              <label className="general-checkbox-container">
                <input type="checkbox"/>
                <span class="general-checkmark"></span>
              </label>
              </div>
            </div>
        </div>
        <div className='location'>
          <p className="black-bold-txt-mediam">Location</p>
          <div className="all-1 sidebar-select mt-3" >    
            <select className="minimal" >
               <option >Cairo</option>
               <option >Assiut</option>
               <option >Alexandria</option>
               <option >Gizeh</option>
               <option >Shubra El-Kheima</option>
            </select>
          </div>  
        </div>
        <p class="black-bold-txt-mediam duration-p">Duration</p>
        <div className="duration-div mt-4">
          
        </div>
    </div>
  )
}

export default Opportunitysidebar