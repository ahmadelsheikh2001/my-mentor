import React from "react";
import './Profile.css';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";






const Profile = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {

    console.log(data);
  }



    return (
        <>

        <div className="container Profile-information">

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
                                Mentor
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
                                <input class="input-gernal input-current" type="text" placeholder="Current Company" />

                            </div>
                        </div>
                    </div>
                    <h5 className="seconry-one mt-4"> My designation is </h5>
                    <div className="row">
                        <div className="col">
                            <div class="all-2">
                                <select class="minimal">
                                    <option>Computer science</option>
                                    <option>Mentee</option>
                                </select>
                            </div>
                        </div>
                        <div className="col ">
                            <div class="mm">
                                <input class="input-gernal input-current" type="text" placeholder="Years Of Experience" />

                            </div>
                        </div>
                    </div>
                    <div className="row mt-4  ">
                        <div className="col-lg-6 col-md-12 col-sm-12">

                                <input class="input-gernal input-current input skills" type="text" placeholder="Experience" />
                            </div>

                        <div className="col">

                                <input class="input-gernal input-current location input" type="text" placeholder="Location" />

                        </div>
                    </div>
                </div>


            </div>
            <button class="btn-gernal btn-defauit mt-5 button-upload">Upload resume</button>
            <div className="buttons d-flex w-100">
            <p className="blue-reguar-txt-small mt-2 para">Uploading your resume is not a must, but it helps those wvho are looking for specific qualifications</p>
            <button class="btn-gernal btn-accept submit">Submit</button>
            </div>
        </div>
        </>
    )
}
export default Profile;
