import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Login.css';

const Login = () => {
   const { register, handleSubmit, formState: { errors }, reset } = useForm({
      mode: 'onTouched'
   });

   const [showPassword, setShowPassword] = useState(false);

   const togglePassword = () => {
      setShowPassword(prevState => !prevState);
   }

   const onSubmit = (data) => {
      console.log(data);
      reset();
   }

   return (
      <div className='page3-login'>
         <Container className='d-flex flex-column align-items-center p-0'>
            <Row>
               <Col>
                  <div className='page3-login-logo d-sm-none d-block'>
                     <img src={logo} className='logo' alt='Logo' />
                  </div>
               </Col>
            </Row>
            <Row>
               <Col>
                  <div className='page3-login-title'>
                     <p className='text-capitalize'>login</p>
                  </div>
               </Col>
            </Row>
            <Row className='w-100'>
               <Col>
                  <div className='page3-login-form'>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='email-content'>
                           <input
                              type="text"
                              className={errors.email ? 'input-transparent email invalid' : 'input-transparent email'}
                              placeholder="Example@example.com"
                              name='email'
                              {...register('email', {
                                 required: 'Email is required',
                                 pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                    message: 'email should be user@gmail.com'
                                 }
                              })}
                           />
                           <div className='errors text-start mt-2'>
                              <p>{errors.email && <span className='text-danger'>{errors.email.message}</span>}</p>
                           </div>
                        </div>
                        <div className='password-content mt-4'>
                           <div className='d-flex justify-content-between position-relative'>
                              <input
                                 type={showPassword ? 'text' : 'password'}
                                 className={errors.password ? 'input-transparent password invalid' : 'input-transparent password'}
                                 placeholder="Password"
                                 name='password'
                                 {...register('password', {
                                    required: 'Password is required',
                                    pattern: {
                                       value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})([^\s]+$)/,
                                       message: `Password should contain Lowercase, Uppercase, Number, Special Characters
                              and at least 8 characters, and no spaces allowed`
                                    }
                                 })}
                              />
                              <span
                                 className='show-password text-capitalize position-absolute'
                                 onClick={togglePassword}
                              >
                                 {showPassword ? 'hide' : 'show'}
                              </span>
                           </div>
                           <div className='errors text-start mt-2'>
                              <p>{errors.password && <span className='text-danger'>{errors.password.message}</span>}</p>
                           </div>
                        </div>
                        <div className='forget-password mt-3'>
                           <Link to='/' className='text-decoration-none'>Forget your password ?</Link>
                        </div>
                        <div className='btn-login d-flex justify-content-center mt-4'>
                           <button type='submit' className="btn-gernal btn-accept text-capitalize mt-2" >login</button>
                        </div>
                     </form>
                  </div>
               </Col>
            </Row>
            <Row>
               <Col>
                  <div className='page3-login-icons d-flex justify-content-between align-items-center mt-5'>
                     <span className='me-4'>Or login with</span>
                     <div className='social-icons'>
                        <FontAwesomeIcon icon={faLinkedinIn} className='linkedin icon' />
                        <AiFillGoogleCircle className='google icon mx-3' />
                        <BsFacebook className='facebook icon' />
                     </div>
                  </div>
               </Col>
            </Row>
            <Row>
               <Col>
                  <div className='page3-login-account mt-4'>
                     <p>Not a member yet? <Link to='/' className='text-decoration-none'>click here to sign up</Link></p>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Login;
