// importing style sheet
import "./feedback.css";

const Feedback = (props) => {
  var clsName;

  if (props.feedback === "success") {
    clsName = "clientFeedback greenF";
  } else if (props.feedback === "error") {
    clsName = "clientFeedback";
  } else if (props.feedback === "warning") {
    clsName = "clientFeedback yellowF";
  }

  return (
    <div className={clsName}>
      <span className="material-symbols-outlined gold">{props.icon}</span>
      <p>{props.content}</p>
    </div>
  );
};

export default Feedback;
