// importing components
import TextField from "../components/textField/textField.jsx";
import SubmitBtn from "../components/submitBtn/submitBtn.jsx";

// importing style sheet
import "./signUpPage.css";

const SignUpPage = () => {
  return (
    <div id="signUpPage" className="signUpPage">
      <div className="showCase">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="Show Case"
        />
      </div>
      <form className="funCase">
        <h1>SIGN UP</h1>
        <TextField label="Name" type="text" />
        <TextField label="Email" type="email" />
        <TextField label="Phone" type="tel" />
        <TextField label="Password" type="password" />
        <SubmitBtn content="Sign Up" />
        <p>
          Already have an Account? <a href="/login-page">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
