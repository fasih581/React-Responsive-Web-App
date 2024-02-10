import React from "react";
import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={css.head}>
        <div className={css.nav}>
          <h5>Home</h5>
          <h5>Dashboard</h5>
          <h5>Products</h5>
          <h5>Transactions</h5>
          <h5>Journal</h5>
        </div>
      </div>
    </>
  );
};

export default NavBar;
