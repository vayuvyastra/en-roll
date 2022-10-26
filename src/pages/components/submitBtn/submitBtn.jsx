// importing style sheet
import "./submitBtn.css";

const SubmitBtn = (props) => {
  const handleClick = () => {
    props.onClick();
  };

  return (
    <button className="submitBtn" onClick={handleClick}>
      {props.content}
    </button>
  );
};

export default SubmitBtn;
