import React from 'react'

const Menteesidebar = () => {
  return (
    <div className='sidebar-content'>
        <div className="line computer-filter"> 
            <h4>Filters</h4>
            <p class="black-reguar-txt-mediam clear-all">Clear All</p>
        </div>
        <div className='rating'>
            <div className="line">
              <p className="black-reguar-txt-mediam">Available for hiring</p>
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
        <p class="blue-reguar-txt-large skills-p">Skills</p>
        <div className="skills-div mt-4">
          <button class="btn-gernal-skills"> C# </button> 
          <button class="btn-gernal-skills"> Communication </button> 
          <button class="btn-gernal-skills"> Presntation </button> 
          <button class="btn-gernal-skills"> Coding </button> 
          <button class="btn-gernal-skills"> UI/UX </button> 
        </div>
    </div>
  )
}

export default Menteesidebar