import React from 'react'
import Searchhead from './Searchhead'
import Mentorsidebar from "./Mentorsidebar"
import {HiOutlineMenuAlt3} from "react-icons/hi"
import Cards from "./Cards"
import { useState } from 'react'
import Menteesidebar from './Menteesidebar'
import Opportunitysidebar from './Opportunitysidebar'
import Request from './Request'
import Opportunity from './Opportunity'
const Page = () => {
  const [mobilemenue,setMobilemenue]=useState(false);
  const [selected,setSelected]=useState("Mentor");
  function showmenu (){
    setMobilemenue(!mobilemenue)
  }
  return (
    <div>
        <Searchhead selected={selected} setSelected={setSelected}/>
        <div className="search-content">
            <div className="line mobile-line"> 
                <h4>Filters</h4>
                <HiOutlineMenuAlt3 onClick={showmenu} className='menu-icon'/>
            </div>
            <div className={mobilemenue?"show-sidebar":"sidebar"}>
                {selected=="Mentor"?<Mentorsidebar/>:selected=="Mentee"?<Menteesidebar/>:<Opportunitysidebar selected={selected}/>}
            </div>
            <div className="main-content">
              { selected=="Mentor"?
                <Cards selected={selected}/>:selected=="Mentee"?<Cards selected={selected}/>:selected=="Opportunites"?
                <Opportunity/>
                :<Request/>
              }
            </div>
        </div>
    </div>
  )
}

export default Page