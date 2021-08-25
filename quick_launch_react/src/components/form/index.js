import { useState } from "react";
import "./index.css";
const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const displayData = (e) => {
    e.preventDefault();
    alert(`${firstname} ${lastname}`);
    setFirstname("");
    setLastname("");
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={displayData}>
        <div className="row">
          <div>
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="form-input"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="form-input"
              placeholder="Last Name"
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
