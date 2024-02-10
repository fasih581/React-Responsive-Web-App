import React, { useState } from "react";
import Css from "./Header.module.css";
import { IoClose } from "react-icons/io5";
import Button from "@mui/material/Button";
import { IoReorderThreeOutline } from "react-icons/io5";
// img
import logo from "../../assets/real-estate-house.png";

const Header = () => {
  const [isMobile, setMobile] = useState(false);

  return (
    <>
      <div className={Css.head}>
        <div className={Css.navMenu}>
          <Button
            className={Css.navMenu}
            variant="text"
            onClick={() => {
              setMobile(true);
            }}
          >
            <IoReorderThreeOutline />
          </Button>
        </div>
        <img className={Css.logo} src={logo} alt="" />
        <h3>XYZ SYSTEMS LLP.</h3>
        {isMobile && (
          <div onClick={() => setMobile(false)} className={Css.nav}>
            <div className={Css.navCls}>
              <Button variant="outlined" onClick={() => setMobile(true)}>
                <IoClose />
              </Button>
            </div>
            <div className={Css.navBody}>
              <h5>Home</h5>
              <h5>Dashboard</h5>
              <h5>Products</h5>
              <h5>Transactions</h5>
              <h5>Journal</h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
