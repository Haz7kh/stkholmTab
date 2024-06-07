import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { submitData } from "../api";
import "../styles/Form.css"; // Import the CSS file
import Hero from "../components/Hero";

const Form = () => {
  const [name, setName] = useState("");
  const [personnr, setPersonnr] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dataField, setDataField] = useState("");
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitData({ name, personnr, phone, email, dataField }, auth.token);
      navigate("/");
    } catch (error) {
      console.error("Data submission failed", error);
    }
  };

  return (
    <>
      <Hero pageTitle="Form" />
      <div className="form-container">
        <h1 className="form-title">Submit Data</h1>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Namn</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Person nummer</label>
              <input
                type="text"
                value={personnr}
                onChange={(e) => setPersonnr(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Telefonnummer</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>E-post</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>mer info</label>
              <textarea
                value={dataField}
                onChange={(e) => setDataField(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
