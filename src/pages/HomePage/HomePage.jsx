import React from 'react'
import './HomePage.css';
import Container from 'react-bootstrap/Container';
import image2 from '../../assets/images/invite.jpg';
import Accordion from 'react-bootstrap/Accordion';
import CarouselCard from '../../components/CarouselCard/CarouselCard';
import Table from 'react-bootstrap/Table';
import { IoSearchCircleOutline, IoIosArrowDown } from "react-icons/io5";
import { BiSearch, BiSolidDownArrow } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const HomePage = () => {
    return (
        <React.Fragment>
            <Container fluid="md">
                <div className="home-page">
                    <div className="main-section">
                        <div className="main-photo">
                            {/* <img src={imagee} alt="" className='image-home' /> */}
                            <div className="get-connected">
                                <h2>Get connected to the <br /> best Mentors</h2>
                                <p className='book-txt'>Book and meet over 3,579+ mentores for 1:1 mentorship in our global community</p>
                                <div className="search-in-get-connected">
                                    <div className="select-arrow">
                                        <select name="" id="">
                                            <option value="">UX Designer</option>
                                            <option value="">Front End</option>
                                            <option value="">Back End</option>
                                        </select>
                                        <MdOutlineKeyboardArrowDown className='arrow-icon' />
                                    </div>
                                    <div className="input-icon-search">
                                        <input type="text" placeholder='What do you need with' />
                                        <BiSearch className='search-icon' />

                                    </div>


                                </div>
                                <p className='learn-txt'>Learn more about mentor and mentee</p>

                            </div>
                        </div>
                    </div>
                    <CarouselCard />
                    <h2 className='my-5'><span className='recent'>Recent</span> mentoring opportunities</h2>
                    <div className="recent-mentoring">
                        <div className="website-ui">
                            <div className="parent">
                                <div className="left">
                                    <h2>Website UI design implementation</h2>
                                    <p>Get mentored by : <span>Belal Shwani</span></p>
                                </div>
                                <div className="right">
                                    <button class="btn-gernal btn-new-request">Request</button>
                                    <button class="btn-gernal btn-new-request mt-2">View</button>
                                </div>
                            </div>
                            <div className="buttons-groups mt-3">
                                <div className="btns">
                                    <button class="btn-gernal btn-accept">Certificate</button>
                                    <button class="btn-gernal btn-accept mx-3">Remote</button>
                                    <button class="btn-gernal btn-accept">Open Duration</button>
                                </div>
                                <div className="btns mt-3">
                                    <button class="btn-gernal btn-accept">Paid</button>
                                    <button class="btn-gernal btn-accept ms-3">Might get hired</button>
                                </div>
                            </div>
                            <div className='looking-txt mt-3'>looking for someone who’s intrested in project managment related tasks and who’s eagre to gain knowledge and have fun during the experience !</div>
                            {/* <div>
                                    <p>i’m a recent computer science graduate from khartoum u
                                        niversity, intrested in front end development and UI / UX looking for
                                        a mentor to guide me through becoming a proficional front end developer  </p>
                                </div> */}

                        </div>
                        <div className="website-ui">
                            <div className="parent">
                                <div className="left">
                                    <h2>Website UI design implementation</h2>
                                    <p>Get mentored by : <span>Belal Shwani</span></p>
                                </div>
                                <div className="right">
                                    <button class="btn-gernal btn-new-request">Request</button>
                                    <button class="btn-gernal btn-new-request mt-2">View</button>
                                </div>
                            </div>
                            <div className="buttons-groups mt-3">
                                <div className="btns">
                                    <button class="btn-gernal btn-accept">Certificate</button>
                                    <button class="btn-gernal btn-accept mx-3">Remote</button>
                                    <button class="btn-gernal btn-accept">Open Duration</button>
                                </div>
                                <div className="btns mt-3">
                                    <button class="btn-gernal btn-accept">Paid</button>
                                    <button class="btn-gernal btn-accept ms-3">Might get hired</button>
                                </div>
                            </div>
                            <div className='looking-txt mt-3'>looking for someone who’s intrested in project managment related tasks and who’s eagre to gain knowledge and have fun during the experience !</div>
                            {/* <div>
                                    <p>i’m a recent computer science graduate from khartoum u
                                        niversity, intrested in front end development and UI / UX looking for
                                        a mentor to guide me through becoming a proficional front end developer  </p>
                                </div> */}

                        </div>
                    </div>
                    <h2 className='more-opportunities my-3'>More opportunities</h2>
                    <div className="know-some-one-all mt-5">
                        <div className="know-some-one-left">
                            <img src={image2} alt="" className='image-left' />
                        </div>
                        <div className="know-some-one-right">
                            <div className="right">
                                <h2>Know someone who will <br /> make a good mentor ?</h2>
                                <p>Invite them to join !</p>
                                <div className="email-invite">
                                    <input type="text" name="" id="" className='email-invite-input' placeholder='Email address ' />
                                    <button class="btn-gernal btn-accept btn-invite">Invite</button>

                                </div>
                            </div>


                        </div>
                    </div>

                    <h2 className='my-5'>Open mentoring requests</h2>
                    <div className="front-enf-development">
                        <div className="front-enf-development-1">
                            <h2>Front enf development </h2>
                            <p><span className='kh-name'>Khadija Saif</span> is lokking for a mentor</p>
                        </div>
                        <div className="front-enf-development-2">
                            <button class="btn-gernal btn-new-request">Certificate</button>
                            <button class="btn-gernal btn-new-request mx-2">Remote</button>
                        </div>
                        <div className="front-enf-development-3">
                            <p>i’m a recent computer science graduate from khartoum u
                                niversity, intrested in front end development and UI / UX looking for
                                a mentor to guide me through becoming a proficional front end developer
                            </p>
                        </div>
                        <div className="front-enf-development-4">
                            <Table >
                                <tr>
                                    <td><span>Duration</span>: 2 month</td>
                                    <td><span>Paid</span>: yes  </td>
                                </tr>
                                <tr>
                                    <td><span>Looking for a job</span>: yes </td>
                                    <td><span>Experince</span>: none </td>
                                </tr>
                            </Table>
                        </div>
                    </div>
                    <h2 className='more-requests my-5'>More Requests</h2>
                    <div className="questions">
                        <div className="left">
                            <h2>Having any questions ?</h2>
                            <p>take a look at our FAQ</p>

                        </div>
                        <div className="right">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> <p className='accordion-header'>How much does it cost to book a mentor</p> </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header> <p className='accordion-header'>what is a no-show ? what is a no-show policy</p> </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header> <p className='accordion-header'>How long is the review process for a mentor application</p> </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header> <p className='accordion-header'>Is the timezone in my booking reflected correctly</p> </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header> <p className='accordion-header'>How do i chanhe my email address</p> </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>
                    </div>
                    <CarouselCard />
                </div>

            </Container>
        </React.Fragment>

    )
}

export default HomePage