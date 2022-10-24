// importing style sheet
import "./textField.css";

const TextField = (props) => {
  return (
    <fieldset className="fields">
      <legend className="legendclass">{props.label}</legend>
      <input
        className="inputfield"
        type={props.type}
        placeholder={props.label}
      />
    </fieldset>
  );
};

export default TextField;
