import React from "react";
import css from "./MemberShipForm.module.css";

import Header from "../../common/Header";

import Button from "@mui/material/Button";

import img from "../../../assets/celeb.png";

import { CgArrowLeft } from "react-icons/cg";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useFormik } from "formik";
import { userFormSchema } from "../../../validation/validation";

import { useTheme } from "@mui/material/styles";

const onSubmit = () => {
  console.log("submitted");
};

const MemberShipForm = () => {
  const theme = useTheme();

  const userForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: userFormSchema,
    onSubmit,
  });

  const handlePhoneChange = (value) => {
    userForm.setFieldValue("phoneNumber", value);
  };

  return (
    <div>
      <Header />
      <div className={css.memberShipPage}>
        <div className={css.backHome}>
          <a href="/">
            <CgArrowLeft />
            <p>Back to home Page</p>
          </a>
        </div>
        <div className={css.form}>
          <div className={css.formBox}>
            <h1>Unlock Exclusive Benfits</h1>
            <form onSubmit={userForm.handleSubmit}>
              <div className={css.inputBox}>
                <div className={css.inputform}>
                  <label htmlFor="phoneNumber">PHONE NUMBER</label>
                  <PhoneInput
                    className={css.phoneInput}
                    country={"us"}
                    name="phoneNumber"
                    onBlur={userForm.handleBlur}
                    onChange={handlePhoneChange}
                    value={userForm.values.phoneNumber}
                    inputStyle={{
                      width: "300px",
                      borderRadius: "20px",
                      [theme.breakpoints.down("sm")]: {
                        width: "250px",
                      },
                    }}
                  />
                  {userForm.errors.phoneNumber &&
                    userForm.touched.phoneNumber && (
                      <div className={css.errorMessage}>
                        {userForm.errors.phoneNumber}
                      </div>
                    )}
                </div>
                <div className={css.inputform}>
                  <label className={css.InputLable} htmlFor="name">
                    NAME
                  </label>
                  <input
                    onBlur={userForm.handleBlur}
                    onChange={userForm.handleChange}
                    value={userForm.values.name}
                    name="name"
                    placeholder="Enter your Name"
                    className={css.Input}
                  />
                  {userForm.errors.name && userForm.touched.name && (
                    <div className={css.errorMessage}>
                      {userForm.errors.name}
                    </div>
                  )}
                </div>
                <div className={css.inputform}>
                  <label className={css.InputLable} htmlFor="email">
                    EMAIL [OPTIONAL]
                  </label>
                  <input
                    className={css.Input}
                    name="email"
                    onBlur={userForm.handleBlur}
                    onChange={userForm.handleChange}
                    value={userForm.values.email}
                    placeholder="Enter your Email [Optinal]"
                  />
                </div>
                <Button className={css.btn} type="submit" variant="contained">
                  Contained
                </Button>
                <p>Get ready to receive a secret code (OTP) on your phone</p>
              </div>
            </form>
          </div>
          <div className={css.img}>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShipForm;
