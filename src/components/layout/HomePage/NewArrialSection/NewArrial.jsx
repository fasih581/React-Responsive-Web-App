import React from "react";
import css from "./NewArrial.module.css";

import Button from "@mui/material/Button";

// img
import Img from "../../../../assets/membership.jpg";

const NewArrial = () => {
  return (
    <div className={css.NewBody}>
      <div>
        <h1>New Arrial</h1>
        <h6>
          <span>JOIN</span>TODAY
        </h6>
      </div>
      <div className={css.imgDiv}>
        <img src={Img} alt="" />
        <Button variant="contained" className={css.joinBtn}>
          JOIN NOW
        </Button>
      </div>
    </div>
  );
};

export default NewArrial;
