import React from 'react'
import './CloseMentor.css'
import '../../App.css'
import { Col, Container, Row } from 'react-bootstrap'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { GoBriefcase } from 'react-icons/go'
import { BiSolidBriefcase, BiTimeFive } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiFillPlusSquare } from 'react-icons/ai'
const CloseMentor = () => {
    return (
        //start mentorRequst Page
        <section className='mentorRequst p-2'>
            <Container className='py-4'>
                {/*start main Row */}
                <Row className=''>
                    {/*start sideBar */}
                    <Col xs={12} lg={3} className='sideBar my-5 d-none d-md-block'>
                        <ul>
                            <li>Edit Mentoring opportunity  </li>
                            <li>Settings</li>
                            <li>Terms and Privacy</li>
                            <li className='mt-5'>Post a new opportunity  <AiFillPlusSquare className='AiFillPlusSquareColor' /> </li>
                        </ul>
                    </Col>
                    {/* end sideBar */}

                    {/*start col of main content/box */}
                    <Col xs={12} lg={9} className='box p-2 pt-0'>

                        <Row >
                            <Col className='d-flex justify-content-end pe-0'>
                                <div class="mentor-general close-mentor-general">
                                    <p className='my-2  me-4'> Closed Mentoring opportunity</p>
                                </div> </Col>
                        </Row>

                        <Row className='my-4 px-2 '>
                            <Col xs={12} md={12}>
                                <div className='about_information '>
                                    <p className='track'>Website UI design implementation</p>
                                    <p className='sub_inf'> Get mentored by :<span className='sub_name'>Belal Shwani</span>
                                    </p>
                                </div>
                                <Col >
                                    <div className='content'>
                                        <p className='content_info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                </Col>
                                <Row xs={12} md={8}>
                                    <Col xs={6} md={4} className=''>
                                        <div className='d-flex    paid'>
                                            <BiSolidBriefcase className='paid_icon me-1 ' />
                                            <p className='paid_text  '>Certificate :<span className='paid_span'>   Awarded </span></p>
                                        </div>
                                        <div className='d-flex    paid'>
                                            <MdOutlineAttachMoney className='paid_icon me-1 ' />
                                            <p className='paid_text  '>Paid : <span className='paid_span'>  200 sdg / H</span></p>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <div className='d-flex    paid'>
                                            <HiOutlineLocationMarker className='paid_icon me-1 ' />
                                            <p className='paid_text  '>Location : <span className='paid_span'>  Remote</span></p>
                                        </div>
                                        <div className='d-flex  paid'>

                                            <BiTimeFive className='paid_icon me-1 ' />
                                            <p className='paid_text  '>Duration :  <span className='paid_span'> Open Duration</span></p>

                                        </div>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <div className='d-flex    paid'>
                                            <GoBriefcase className='paid_icon me-1 ' />
                                            <p className='paid_text  '>Might get hired :<span className='paid_span'> yes</span></p>
                                        </div>

                                    </Col>
                                </Row>
                                <div className='help_with my-5'>
                                    <p className='help_with_header'>I’m looking for help with </p>
                                    <ul className='help_with_list ps-3'>
                                        <li>Write software applications and programs for backend/frontend purposes.</li>
                                        <li> Analyse programs and apps to improve their features and functionalities.</li>
                                        <li> Test & debug programs and fix any reported bugs.</li>
                                        <li> Collaborate with the tech team to improve the performance, efficiency, and scalability of our tools. </li>
                                    </ul>
                                </div>
                                <div className='requirements my-5'>
                                    <p className='requirements_header'>Requirements  </p>
                                    <ul className='requirements_list ps-3'>
                                        <li>Knowledge of APIs and webservices. </li>
                                        <li> Knowledge of Relational Databases (MySQL, PostgreSQL, SQL Server ...) and SQL language.</li>
                                        <li> Knowledge of NoSQL databases is a plus. </li>

                                    </ul>
                                </div>
                                <div className='background_about my-5'>
                                    <p className='background_about_header'>I have a background about  </p>
                                    <ul className='background_about_list ps-3'>
                                        <li>An opportunity to work with remarkably talented colleagues.</li>
                                        <li>  Vast growth potential in every aspect.</li>
                                        <li>  15% target bonus with further upside.</li>
                                        <li>  Employee share scheme participation. </li>
                                        <li> International relocation support </li>
                                        <li> Opportunity to be embedded within a commercial team for those with strong </li>
                                    </ul>
                                </div>
                            </Col>


                        </Row>
                        <Row>
                            <Col xs={12}>
                                <h3 className='about_header my-4 d-none d-md-block'>About Belal Shwani</h3>
                                <div className='about_box my-4'>
                                    <div className=" d-flex justify-content-between gap-3 flex-wrap ">
                                        <div>
                                            <div><p className='sub_title mb-0'>Name </p>
                                                <p className='answer'>Balqees Hamdi  </p></div>
                                            <div><p className='sub_title mb-0'>Job Title </p>
                                                <p>Software Engineer </p></div>
                                            <div>
                                                <p className='sub_title mb-0'>Company </p>
                                                <p>EIT</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div><p className='sub_title mb-1'>Phone number  </p>
                                                <p className='answer'> 0995457312 </p></div>
                                            <div><p className='sub_title mb-1 '>Email </p>
                                                <p>Balqeessabir@gmail.com </p>
                                            </div>

                                        </div>
                                        <div>
                                            <div><p className='sub_title mb-1'>Expertise </p>
                                                <ul>
                                                    <li>Software Engineering</li>
                                                    <li>Front End Development</li>
                                                    <li>UI/ UX Design</li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='d-flex flex-wrap profile_content justify-content-between align-items-center mb-4 '>
                                        <Col xs={12} md={9} >
                                            <div>
                                                <h3 className='about_header my-2 d-md-none'>About Belal Shwani</h3>
                                                <p className='description'>
                                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={2} className='d-flex flex-column justify-content-between   mb-2'>

                                            <div className='profile_img mx-auto'></div>
                                            <button class="btn-gernal  my-4"> View Profile  </button>

                                        </Col>
                                    </div>
                                </div>

                            </Col>
                        </Row>

                        <div className='review_box px-3 py-4'>
                            <div className='d-flex gap-3 justify-content-between info_div py-3'>
                                <div className='profile_img'></div>
                                <div>
                                    <p className='name mb-1'>Nora Ali</p>
                                    <p>dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3 justify-content-between info_div py-3'>
                                <div className='profile_img ms-5'></div>
                                <div className=''>
                                    <p className='name mb-1'>Nora Ali</p>
                                    <p>dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3 justify-content-between info_div py-3'>
                                <div className='profile_img'></div>
                                <div>
                                    <p className='name mb-1'>Nora Ali</p>
                                    <p>dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                        </div>
                        <div className='subscribe my-4 w-100'>
                            <div class="mm w-100 my-3">
                                <input class="input-gernal p-4" placeholder='Leave your comment here ' type="text" />
                            </div>
                            <div className='send_Button_Div float-none float-md-end mb-3'>
                                <button class="btn-gernal btn-accept w-100">send</button>
                            </div>
                        </div>
                        <Row>

                        </Row>
                    </Col>
                    {/*end col of main content/box */}
                </Row>
                {/* End main Row */}
            </Container>
        </section>
        //end mentorRequst Page
    )
}

export default CloseMentor;