import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./forgotPass.css";

import TextField from "../components/textField/textField.jsx";
import SubmitBtn from "../components/submitBtn/submitBtn";
import Feedback from "../components/feedback/feedback.jsx";
import Footer from "../components/footer/footer";

var email;

const ForgotPass = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState({
    state: false,
    content: "",
  });

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const handleFill = (inputName, inputValue) => {
    email = inputValue;
    setErr({
      state: false,
      content: "",
    });
  };

  const handleOTP = async () => {
    setIsLoading(true);
    const resp = await fetch(
      "https://vayuyastra.herokuapp.com/auth/forgotPassword",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
      }
    ).then((response) => {
      if (response.ok) {
        // console.log(response.statusText, response.status);
        return response.json();
      } else {
        // console.log(response.statusText, response.status);
        return response.json();
      }
    });

    try {
      if (resp.status === "failed") {
        setErr({
          state: true,
          content: capitalize(resp.reason),
        });
      }
    } catch (e) {}

    try {
      if (resp.status === "success") {
        navigate("/verify-otp");
      }
    } catch (e) {}

    setIsLoading(false);
  };

  return (
    <div className="forgot-password centered">
      <h1>Forgot Password</h1>

      <div className="heading">
        <TextField
          label="Email"
          type="email"
          name="email"
          onFill={handleFill}
        />
      </div>
      <div className="heading">
        <button
          onClick={() => navigate("/login")}
          className="help-btn"
          style={{ fontFamily: "sharpSansBold" }}
        >
          Back
        </button>
        <SubmitBtn onClick={handleOTP} content="send otp" disable={isLoading} />
      </div>
      {err.state && (
        <Feedback feedback="error" icon="close" content={err.content} />
      )}
      <Footer/>
    </div>
  );
};

export default ForgotPass;
