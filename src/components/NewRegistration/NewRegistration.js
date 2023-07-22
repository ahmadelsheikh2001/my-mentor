
import React from "react";
import './NewRegistration.css'
import '../../App.css'
import { Container, Col, Row } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs"
import { AiFillGoogleCircle } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";

function NewRegistration() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmpasswordShown, setconfirmaPasswordShown] = useState(false);



    const togglePassword = () => {

        setPasswordShown(!passwordShown);
    };
    const toggleConfirmPassword = () => {

        setconfirmaPasswordShown(!confirmpasswordShown);
    };


    return (
        <div className="Page4_Registration_1">
            <Container>
                <Row>

                    <h2 >Create a new account</h2>
                    <p>Basic account information</p>

                    <Col className="First_section" size={12} >
                        <form >

                            <input className="input-transparent" type="text" placeholder="Name" sm={12} md={3} lg={6} />

                            <input className="input-transparent pass-input" type={passwordShown ? "text" : "password"} placeholder="Password" sm={12} md={3} lg={6} />
                            <span onClick={togglePassword} >Show</span>


                            <input className="input-transparent" type="text" placeholder="Email" sm={12} md={3} lg={6} />

                            <input className="input-transparent pass-input" type={confirmpasswordShown ? "text" : "password"} placeholder="Confirm password" sm={12} md={3} lg={6} />
                            <span onClick={toggleConfirmPassword}>Show</span>

                            <Col className="social" >
                                <button className="btn-gernal btn-accept" type="submit"> sign up </button>
                                <p  >Or sign up with</p>
                                <div className="icons">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="linkedin icon" />
                                    <AiFillGoogleCircle className="icon google mx-3" />
                                    <BsFacebook className="icon facebook" /></div>
                                <div className="check_div">
                                    <label class="general-checkbox-container">
                                        <input type="checkbox" />
                                        <span class="general-checkmark"></span>
                                        I accept privacy terms and conditions
                                    </label>
                                </div>
                            </Col>


                        </form>
                    </Col>

                </Row>
            </Container>


        </div>
    )
}
export default NewRegistration;
