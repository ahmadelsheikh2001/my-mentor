import React from "react";
import { useState } from "react";
import "./ContactUs.css";
import { Send } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_number: 0,
    message: "",
  });
  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <section className="Contact-Us">
        <div className="container">
          <div className="row">
            <div className="col-md-5 d-flex align-items-center text-start">
              <div className="ContactUs-Info  ">
                <h2>Get in Touch</h2>
                <p>We’d love to hear from you</p>
              </div>
            </div>
            <div className="col-md-7 ">
              <div className="container ">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="contact-form row m-4 p-4"
                >
                  <div className="col-md-6 pt-4">
                    <label htmlFor="first_name " className="form-label">
                      first Name{" "}
                    </label>
                    <input
                      onChange={getUserData}
                      type="text"
                      className={`input-placeholder ${
                        errors.first_name && "invalid"
                      }`}
                      {...register("first_name", {
                        required: "First Name is Required",
                      })}
                      onKeyUp={() => {
                        trigger("first_name");
                      }}
                    />
                    {errors.first_name && (
                      <small className="text-danger">
                        {errors.first_name.message}
                      </small>
                    )}
                  </div>
                  <div className="col-md-6 pt-4">
                    <label htmlFor="last_name" className="form-label">
                      last Name{" "}
                    </label>
                    <input
                      onChange={getUserData}
                      type="text"
                      className={`input-placeholder ${
                        errors.last_name && "invalid"
                      }`}
                      {...register("last_name", {
                        required: "Last Name is Required",
                      })}
                      onKeyUp={() => {
                        trigger("last_name");
                      }}
                    />
                    {errors.last_name && (
                      <small className="text-danger">
                        {errors.last_name.message}
                      </small>
                    )}
                  </div>
                  <div className="col-md-12 ">
                    <label htmlFor="email" className="my-2">
                      Email
                    </label>
                    <input
                      onChange={getUserData}
                      type="text"
                      className={`input-placeholder ${
                        errors.email && "invalid"
                      }`}
                      {...register("email", {
                        required: "Email Name is Required ",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      onKeyUp={() => {
                        trigger("email");
                      }}
                    />
                    {errors.email && (
                      <small className="text-danger">
                        {errors.email.message}
                      </small>
                    )}
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="mobile_number" className="my-2">
                      Mobile Number{" "}
                    </label>
                    <input
                      onChange={getUserData}
                      type="text"
                      className={`input-placeholder ${
                        errors.mobile_number && "invalid"
                      }`}
                      {...register("mobile_number", {
                        required: "Phone is Required",
                        pattern: {
                          value:
                            /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                          message: "Invalid phone number",
                        },
                      })}
                      onKeyUp={() => {
                        trigger("mobile_number");
                      }}
                    />
                    {errors.mobile_number && (
                      <small className="text-danger">
                        {errors.mobile_number.message}
                      </small>
                    )}
                  </div>
                  <label htmlFor="Message" className="my-2">
                    Message{" "}
                  </label>
                  <textarea
                    className={`input-placeholder area ${
                      errors.message && "invalid"
                    }`}
                    {...register("message", {
                      required: "Message is Required",
                      minLength: {
                        value: 10,
                        message: "Minimum Required length is 10",
                      },
                      maxLength: {
                        value: 50,
                        message: "Maximum allowed length is 50 ",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("message");
                    }}
                  ></textarea>
                  {errors.message && (
                    <small className="text-danger">
                      {errors.message.message}
                    </small>
                  )}
                  <div className="button-form d-flex justify-content-sm-center justify-content-md-end ">
                    <button type="submit" className="btn btn-general my-2 ">
                      Send{" "}
                      <span>
                        <Send />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
