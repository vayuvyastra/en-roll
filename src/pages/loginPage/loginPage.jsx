// importing components
import TextField from "../components/textField/textField.jsx";
import SubmitBtn from "../components/submitBtn/submitBtn.jsx";

//importing images
import clubPhoto from "../../images/club-photo.jpg";

// importing style sheet
import "./loginPage.css";

const LoginPage = () => {
  return (
    <div id="loginPage" className="loginPage">
      <div className="showCase">
        <img src={clubPhoto} alt="Club Profile" />
      </div>
      <form className="funCase">
        <h1>LOGIN</h1>
        <TextField label="Username" type="email" />
        <TextField label="Password" type="password" />
        <SubmitBtn content="Sign in" />
        <p>
          Not registered yet? <a href="/sign-up-page">Create an Account</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
