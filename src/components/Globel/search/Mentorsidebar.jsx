import React from 'react'

const Mentorsidebar = () => {
  return (
    <div className='sidebar-content'>
        <div className="line computer-filter"> 
            <h4>Filters</h4>
            <p class="black-reguar-txt-mediam clear-all">Clear All</p>
        </div>
        <p className="black-bold-txt-mediam p-rating">Rating</p>
        <div className='rating'>
            <div className="line">
              <p className="black-reguar-txt-mediam">Five Stars</p>
              <div>
              <label className="general-checkbox-container">
                <input type="checkbox"/>
                <span class="general-checkmark"></span>
              </label>
              </div>
            </div>
            <div className="line">
              <p className="black-reguar-txt-mediam">Four Stars</p>
              <label className="general-checkbox-container"> 
                <input type="checkbox" />
                <span className="general-checkmark"></span>
              </label>
            </div>
            <div className="line">
              <p className="black-reguar-txt-mediam">Three Stars</p>
              <label className="general-checkbox-container">
                <input type="checkbox" />
                <span className="general-checkmark"></span>
              </label>
            </div>
            <div className="line">
              <p class="black-reguar-txt-mediam">Two Stars</p>
              <label className="general-checkbox-container">
                <input type="checkbox" />
                <span className="general-checkmark"></span>
              </label>
            </div>
            <div className="line">
              <p className="black-reguar-txt-mediam">One Stars</p>
              <label className="general-checkbox-container">
                <input type="checkbox" />
                <span className="general-checkmark"></span>
              </label>
            </div>
            <div className="line">
              <p className="black-reguar-txt-mediam">All</p>
              <label className="general-checkbox-container">
                <input type="checkbox" />
                <span className="general-checkmark"></span>
              </label>
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
    </div>
  )
}

export default Mentorsidebar