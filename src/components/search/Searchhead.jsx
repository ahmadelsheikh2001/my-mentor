import React from 'react'
import { GoBriefcase } from 'react-icons/go';
import { IoSearchCircleOutline } from "react-icons/io5";
import {RiAccountCircleLine} from "react-icons/ri"
import {BiSolidDownArrow} from "react-icons/bi"
import { Col, Row } from 'react-bootstrap';
const Searchhead = ({selected,setSelected}) => {
  return (
    <div className='search-head-container '>
        <Row>
            <Col lg={3} xs={12}>
            <div className='head-select-mobile'>
            <div className="search-head-div input-icon" >
                <input className="input-transparent" type="text" placeholder="UI UX designer"/> 
                <IoSearchCircleOutline className='search-icon' />
            </div>
            </div>
            </Col>
            <Col lg={3} xs={12}>
            <div className='head-select-mobile'>
            <div className="search-head-div center search-head-select" >
                <RiAccountCircleLine className='select-icon' />
                <select className="select" onChange={(e)=>{setSelected(e.target.value)}}>
                    <option > Mentor</option>
                    <option >Mentee</option>
                    <option >Opportunites</option>
                    <option >Requests</option>
                </select>
                <BiSolidDownArrow className='select-arrow'/>
            </div>
            </div>
            </Col>
            <Col lg={3} xs={12}>
            <div className='head-select-mobile'>
            <div class="search-head-div search-head-select" >
            <GoBriefcase className='select-icon' />
            <select className="select" >
                <option >Experience</option>
            </select>
            <BiSolidDownArrow className='select-arrow'/>
            </div>
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default Searchhead