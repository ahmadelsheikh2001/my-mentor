import React from 'react'
import './Mentor_Request_Form.css'
import '../../App.css'
import { Col, Row,Container } from 'react-bootstrap';
import {AiFillPlusSquare} from "react-icons/ai";
import { useForm } from "react-hook-form";


function Mentor_Request_Form(){

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {

    console.log(data);
  }


    return(
       <section className='Page14_Mentoring_Request_Form'>
          <Container>
               <Row>
                <Col className='form-container '>
                <Col className="mentor-general">
                <p>  Mentoring request</p>
               </Col>

               <form className='form-content' onSubmit={handleSubmit(onSubmit)}>
                 <Col className='label-block'>
                <label >Mentoring request title</label>
                <input className="input-gernal title " type="text"{...register("Title",{ required: true, maxLength: 50 })} placeholder={errors.Title && "* Input required"} />

                </Col>
                <Col className='label-block'>
                <label>Request Description</label>
                <input className="input-gernal description " type="text" {...register("Description",{ required: true, maxLength: 255 })} placeholder={errors.Description && "* Input required"} />

                </Col>

                <Row lg={4} md={12} sm={12} className='Row-Certificate'>
                <label >Location</label>
                <div className="all-3"  >
                <select className="minimal"  >
                   <option >Remote</option>
                   <option >Onsite</option>
                </select>
               </div>
               <label>Duration</label>
                <div className="all-3" >
                <select className="minimal" >
                   <option >3 months</option>
                   <option >2 months</option>
                   <option >4 months</option>
                   <option >5 months</option>
                   <option >6 months</option>
                </select>
               </div>
               </Row>

               <Row lg={4} md={12} sm={12} className='Row-Certificate'>
                <label >Experince</label>
                <div className="all-3"  >
                <select className="minimal" >
                   <option >None</option>
                   <option >1-2 Years</option>
                   <option >2-5 Years</option>
                   <option >More than 5 years</option>
                </select>
               </div>

               </Row>
               <Row lg={4} md={12} sm={12} >

               </Row>

               <Row lg={3} className='paid'>

               <Col className="check_div">
                        {/* <label class="general-checkbox-container">
                            <input type="radio"/>
                            <span class="general-checkmark"></span>
                            Paid
                        </label> */}
               <label class="form-check-label" for="radio1"> Paid
               <input type="radio" class="form-check-input mx-2" id="radio1" name="optradio" value="option1" />
               </label>


                </Col>
                 <Col>
                 <label className='labels'>Amount</label>
                <input className="input-gernal amount" type="text" />
                </Col>
                <Col>
                 <label className='labels2'>Currency</label>
                < Col className="all-3"  >
                <select className="minimal"  >

                   <option >USD</option>
                   <option >ERO</option>
                   <option >LE</option>

                </select>
                </Col>
               </Col>
               </Row>

                <Col className='label-block'>
                <label >I'm looking for help with</label>
                <input className="input-gernal responsibilities" type="text" {...register("Responsibilities",{ required: true, maxLength: 255 })} placeholder={errors.Responsibilities && "* Input required"}/>
                <AiFillPlusSquare className='icon' />

                </Col>
                <Col className='label-block'>
                <label >Requirements </label>
                <input className="input-gernal responsibilities " type="text" {...register("Requirements",{ required: true, maxLength: 255 })} placeholder={errors.Requirements && "* Input required"}/>
                <AiFillPlusSquare  className='icon'/>

                </Col>
                <Col className='label-block'>
                <label >I have a background about</label>
                <input className="input-gernal responsibilities " type="text" {...register("Expected_Outcome",{ required: true, maxLength: 255 })}placeholder={errors.Expected_Outcome && "* Input required"}/>
                <AiFillPlusSquare  className='icon'/>

                </Col>
                <button className="btn-gernal btn-accept" type='submit'> Publish </button>
               </form>

                </Col>
                </Row>




          </Container>

       </section>
    )
}
export default Mentor_Request_Form;
