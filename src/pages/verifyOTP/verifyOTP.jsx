import { useNavigate } from "react-router-dom";
import { useState } from "react";

import TextField from "../components/textField/textField.jsx";
import SubmitBtn from "../components/submitBtn/submitBtn";
import Feedback from "../components/feedback/feedback.jsx";
import Footer from "../components/footer/footer.jsx";

var otp;
var email;

const VerifyOTP = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState({
    state: false,
    content: "",
  });

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const handleFill = (inputName, inputValue) => {
    if (inputName === "otp") {
      otp = inputValue;
    } else if (inputName === "email") {
      email = inputValue;
    }
    setErr({
      state: false,
      content: "",
    });
  };

  const handleOTP = async () => {
    setIsLoading(true);
    const resp = await fetch(
      "https://vayuyastra.herokuapp.com/auth/verifyOTP",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
          otp: otp,
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
        navigate("/update-password");
      }
    } catch (e) {}

    // console.log(resp);

    setIsLoading(false);
  };

  return (
    <div className="forgot-password centered">
      <h1>Verify OTP</h1>

      <div className="heading">
        <TextField
          label="Email"
          type="email"
          name="email"
          onFill={handleFill}
        />
        <TextField label="OTP" type="text" name="otp" onFill={handleFill} />
      </div>
      <div className="heading">
        <SubmitBtn
          onClick={handleOTP}
          content="verify otp"
          disable={isLoading}
        />
      </div>
      {err.state && (
        <Feedback feedback="error" icon="close" content={err.content} />
      )}
      <Footer />
    </div>
  );
};

export default VerifyOTP;
