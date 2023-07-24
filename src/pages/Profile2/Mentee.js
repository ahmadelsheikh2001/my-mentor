import React from "react";
import './Mentee.css';
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";


const Mentee = () => {

    return (


        <div className="container Mentee">
             <div className="content">

            <h2 className="profile-title">Profile Information</h2>
            <p>Help us by answering questions to get you started</p>
            </div>
            <div className="row">

                <div className="col-md-12">
                <h5 className=" seconry-one"> I'm Looking For </h5>
                    <div className="row">
                        <div className="col">
                            <div class="all-2">

                            <div class="dropdown">
                                <button type="button" class="minimal btn  dropdown-toggle" data-bs-toggle="dropdown">
                                Metee
                                </button>
                                <div class="dropdown-menu">
                                    <Link class="dropdown-item" to='/Profile'>Mentor</Link>
                                    <Link class="dropdown-item" to="/Profile2">Mentee</Link>

                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="mm">
                            <div className="check_div">
                              <label class="general-checkbox-container">
                               <input type="checkbox"  />
                               <span class="general-checkmark"></span>
                                 Available for hiring
                                </label>
                            </div>


                            </div>
                        </div>
                    </div>
                    <h5 className="seconry-one mt-4"> My designation is </h5>
                    <div className="row">
                        <div className="col ">
                            <div class="all-2">
                                <select class="minimal">
                                    <option>Computer science</option>
                                    <option>Mentee</option>
                                </select>
                            </div>
                        </div>
                        <div className="col ">
                            <div class="mm">
                                <input class="input-gernal input-current" type="text" placeholder={"Skills" } />

                            </div>
                        </div>
                    </div>
                    <div className="row mt-4  ">


                        <div className="col">



                        </div>
                    </div>
                </div>


            </div>
            <Row md={12} sm={12}>
            <Col className="btn-responsive" >
            <button className="btn-gernal btn-defauit button-upload ">Upload resume</button>
            <div className="buttons d-flex">
            <p className="blue-reguar-txt-small mt-2 para">Uploading your resume is not a must, but it helps those wvho are looking for specific qualifications</p>
            <input className="input-gernal input-current location " type="text" placeholder="Location" />
            </div>
            </Col>
            </Row>
            <button class="btn-gernal btn-accept submit">Submit</button>
  </div>
    )
}
export default Mentee;

