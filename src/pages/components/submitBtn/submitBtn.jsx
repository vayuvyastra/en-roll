// importing style sheet
import "./submitBtn.css";

const SubmitBtn = (props) => {
  return (
    <button type="submit" className="submitBtn">
      {props.content}
    </button>
  );
};

export default SubmitBtn;
