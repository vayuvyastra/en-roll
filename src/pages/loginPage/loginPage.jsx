// importing dependency's components
import { useState } from "react";

// importing components
import TextField from "../components/textField/textField.jsx";
import SubmitBtn from "../components/submitBtn/submitBtn.jsx";
import EnrollBtn from "../components/enrollBtn/enrollBtn.jsx";
import Feedback from "../components/feedback/feedback.jsx";

//importing images
import clubPhoto from "../../images/club-photo.jpg";

// importing style sheet
import "./loginPage.css";

// Global variables accross login page
var email;
var password;
var userId;

const LoginPage = () => {
  // Hooks for conditionally rendering components
  const [makePay, setMakePay] = useState(false);
  const [sucs, setSucs] = useState({
    state: false,
    content: "",
  });
  const [err, setErr] = useState({
    state: false,
    content: "",
  });
  const [warn, setWarn] = useState({
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
    }
    setMakePay(false);
    setErr({
      state: false,
      content: "",
    });
    setSucs({
      state: false,
      content: "",
    });
    setWarn({
      state: false,
      content: "",
    });
  };

  const handleComplete = async () => {
    const resp = await fetch("https://vayuyastra.herokuapp.com/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // console.log(response.statusText, response.status);
          return response.json();
        } else {
          // console.log(response.statusText, response.status);
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
      if (resp.creditionals.email === email) {
        // console.log("Hello world!");
        if (resp.accountInfo.accountStatus === "Not activated") {
          setWarn({
            state: true,
            content: capitalize(resp.accountInfo.reason),
          });
          setMakePay(true);

          userId = resp.creditionals.userId;
        } else {
          // console.log("Logged In");
        }
      }
    } catch (e) {}

    // console.log(resp);
  };

  const handleSuccess = (paymentId) => {
    setMakePay(false);
    setWarn({
      state: false,
      content: "",
    });
    setSucs({
      state: true,
      content: "Successfully Paid",
    });
    console.log(paymentId);
  };

  const handleDoLater = () => {
    setMakePay(false);
    setWarn({
      state: false,
      content: "",
    });
    setSucs({
      state: true,
      content: "Logged In",
    });
  };

  return (
    <div id="loginPage" className="loginPage">
      <div className="showCase">
        <img src={clubPhoto} alt="Club Profile" />
      </div>
      <form onSubmit={handleSubmit} className="funCase">
        <h1>LOGIN</h1>
        <TextField
          label="Email"
          type="email"
          name="email"
          onFill={handleFill}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          onFill={handleFill}
        />
        {makePay ? (
          <SubmitBtn content="Do later" onClick={handleDoLater} />
        ) : (
          <SubmitBtn content="Sign in" onClick={handleComplete} />
        )}
        {/* If payment required then Enroll button will be rendered */}
        {makePay && <EnrollBtn vID={userId} onSuccess={handleSuccess} />}
        {/* Error handling of differnt post responses */}
        {err.state && (
          <Feedback feedback="error" icon="close" content={err.content} />
        )}
        {warn.state && (
          <Feedback feedback="warning" icon="warning" content={warn.content} />
        )}
        {sucs.state && (
          <Feedback feedback="success" icon="done" content={sucs.content} />
        )}
        <p className="redirect">
          Not registered yet? <a href="/create-account">Create an Account</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
