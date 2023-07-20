import React from 'react'
import { useState } from 'react';
import './ContactUs.css'
import { Send} from 'react-bootstrap-icons';
export default function ContactUs() {
    const[user,setUser]=useState({
        first_name:'',
        last_name :'',
        email:'',
        mobile_number:0,
        message:'',
    })
    function getUserData(e){
        let myUser = {...user}
        myUser[e.target.name]= e.target.value;
        setUser(myUser)
        
    }
    async function submitData(e){
        e.preventDefault()
    }
  return (
    <>
    <section className='Contact-Us'>
        <div className="container">
            <div className="row">
                <div className="col-md-5 d-flex align-items-center text-start">
                    <div className="ContactUs-Info ">
                        <h2>Get in Touch</h2>
                        <p>We’d love to hear from you</p>
                    </div>
                   
                </div>
                <div className="col-md-7 ">
                    <div className="container ">
                        <form onSubmit={submitData} className='contact-form row p-4'>
                            <div className="col-md-6 pt-4">
                                <label  htmlFor="first_name " className='form-label' >first Name </label>
                                <input onChange={getUserData} type="text" className=' input-placeholder 'id='first_name' name='first_name' />
                            </div>
                            <div className="col-md-6 pt-4">
                                <label  htmlFor="last_name"className='form-label' >last Name </label>
                                <input  onChange={getUserData}type="text" className='  input-placeholder  'id='last_name' name='last_name' />
                            </div> 
                            <div className="col-md-12 ">
                            <label  htmlFor="email" className='my-2'>Email</label>
                            <input  onChange={getUserData}type="email" className='input-placeholder 'id='email' name='email' />
                            <label  htmlFor="mobile_number"  className='my-2'>Mobile Number </label>
                            <input  onChange={getUserData}type="text" className='   input-placeholder 'id='mobile_number' name='mobile_number' />
                            <label  htmlFor="Message"  className='my-2'>Message </label>
                            <textarea  onChange={getUserData}type="text" className='input-placeholder area'id='Message' name='Message' />
                            <div className='d-flex justify-content-sm-center justify-content-md-end '>
                            <button type='submit' className='btn btn-general my-2 '>Send <span><Send/></span></button>
                            </div>
                            </div>
                   </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}
