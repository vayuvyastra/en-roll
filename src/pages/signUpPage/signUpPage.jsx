// importing dependency's components
import { useState } from "react";

// importing components
import TextField from "../components/textField/textField.jsx";
import SubmitBtn from "../components/submitBtn/submitBtn.jsx";
import Feedback from "../components/feedback/feedback.jsx";

// importing style sheet
import "./signUpPage.css";

// Global variables accross login page
var fullName;
var email;
var password;
var phone;

const SignUpPage = () => {
  // Hooks for conditionally rendering components
  const [sucs, setSucs] = useState({
    state: false,
    content: "",
  });
  const [err, setErr] = useState({
    state: false,
    content: "",
  });

  // Some Functions !!!!!!
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  // Handling Events
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleFill = (inputName, inputValue) => {
    if (inputName === "password") {
      password = inputValue;
    } else if (inputName === "email") {
      email = inputValue;
    } else if (inputName === "phone") {
      phone = inputValue;
    } else if (inputName === "fullName") {
      fullName = inputValue;
    }
    setErr({
      state: false,
      content: "",
    });
    setSucs({
      state: false,
      content: "",
    });
  };

  const handleComplete = async () => {
    const resp = await fetch("https://vayuyastra.herokuapp.com/auth/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: fullName,
        email: email,
        phone: phone,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // console.log(response);
          return response.json();
        } else {
          // console.log(response);
          setSucs({
            state: false,
            content: "",
          });
          return response.json();
        }
      })
      .catch((e) => {
        // If server not responding, then rendering "Server error"
        setErr({
          state: true,
          content: "Server Error",
        });
      });

    // After response from server the response message is conditionally rendered
    try {
      if (resp.status === "failed" || resp.status === "failure") {
        setErr({
          state: true,
          content: capitalize(resp.reason),
        });
      }
    } catch (e) {}

    try {
      if (resp.status === "success") {
        setSucs({
          state: true,
          content: capitalize(resp.message),
        });
      }
    } catch (e) {}

    // console.log(resp);
  };

  return (
    <div id="signUpPage" className="signUpPage">
      <div className="showCase">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="Show Case"
        />
      </div>
      <form onSubmit={handleSubmit} className="funCase">
        <h1>Create Account</h1>
        <TextField
          label="Name"
          type="text"
          name="fullName"
          onFill={handleFill}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          onFill={handleFill}
        />
        <TextField label="Phone" type="tel" name="phone" onFill={handleFill} />
        <TextField
          label="Password"
          type="password"
          name="password"
          onFill={handleFill}
        />
        <SubmitBtn content="Sign Up" onClick={handleComplete} />
        {/* Error handling of differnt post responses */}
        {err.state && (
          <Feedback feedback="error" icon="close" content={err.content} />
        )}
        {sucs.state && (
          <Feedback feedback="success" icon="done" content={sucs.content} />
        )}
        <p className="redirect">
          Already have an Account? <a href="/login">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
