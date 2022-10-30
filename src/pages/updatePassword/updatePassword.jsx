import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/footer/footer.jsx";

import TextField from "../components/textField/textField.jsx";
import SubmitBtn from "../components/submitBtn/submitBtn";
import Feedback from "../components/feedback/feedback.jsx";

var email;
var password;

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState({
    state: false,
    content: "",
  });

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const handleFill = (inputName, inputValue) => {
    if (inputName === "password") {
      password = inputValue;
    } else if (inputName === "email") {
      email = inputValue;
    }
    setErr({
      state: false,
      content: "",
    });
  };

  const handleUpPass = async () => {
    setIsLoading(true);
    const resp = await fetch(
      "https://vayuyastra.herokuapp.com/auth/forgotPasswordUpdate",
      {
        headers: {
          "Content-Type": "application/json", 
        },
        method: "PATCH",
        body: JSON.stringify({
          email: email,
          newPassword: password,
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
        navigate("/login")
      }
    } catch (e) {}

    // console.log(resp);

    setIsLoading(false);
  };

  return (
    <div className="forgot-password centered">
      <h1>Update Password</h1>

      <div className="heading">
        <TextField
          label="Email"
          type="email"
          name="email"
          onFill={handleFill}
        />
        <TextField
          label="Password"
          type="text"
          name="password"
          onFill={handleFill}
        />
      </div>
      <div className="heading">
        <SubmitBtn
          onClick={handleUpPass}
          content="update password"
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

export default UpdatePassword;
