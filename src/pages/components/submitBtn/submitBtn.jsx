// importing dependency's components
// import { useState } from "react";

// importing style sheet
import "./submitBtn.css";

const SubmitBtn = (props) => {
  const handleClick = () => {
    props.onClick();
  };

  const btn = (gold) => {
    if (gold) {
      return (
        <button
          className="submitBtn disable-btn"
          onClick={handleClick}
          disabled
        >
          {props.content}
        </button>
      );
    } else {
      return (
        <button className="submitBtn" onClick={handleClick}>
          {props.content}
        </button>
      );
    }
  };

  return btn(props.disable);
};

export default SubmitBtn;
