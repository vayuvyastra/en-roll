import "./forgotPass.css";
import TextField from "../components/textField/textField.jsx";
import SubmitBtn from "../components/submitBtn/submitBtn";

const ForgotPass = () => {
  const handleFill = (inputName, inputValue) => {};

  return (
    <div className="forgot-password">
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
      <SubmitBtn content="Send otp" disable={true}/>
      </div>
    </div>
  );
};

export default ForgotPass;
