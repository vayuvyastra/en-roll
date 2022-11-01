import { useState } from "react";

// importing style sheet
import "./textField.css";

const TextField = (props) => {
  const [data, setData] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(value);
    props.onFill(name, value);
  };

  return (
    <fieldset className="fields">
      <legend className="legendclass">{props.label}</legend>
      <input
        className="inputfield"
        name={props.name}
        type={props.type}
        placeholder={props.label}
        onChange={handleChange}
        value={data}
      />
    </fieldset>
  );
};

export default TextField;
