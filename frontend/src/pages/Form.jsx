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
  const [address, setAddress] = useState(""); // Address state
  const [dataField, setDataField] = useState("");
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log({ name, personnr, phone, email, address, dataField });
      const response = await submitData(
        { name, personnr, phone, email, address, dataField }, // Include address
        auth.token
      );
      console.log("Data submitted successfully:", response.data);
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
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Person Number</label>
              <input
                type="text"
                value={personnr}
                onChange={(e) => setPersonnr(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>More Info</label>
              <textarea
                value={dataField}
                onChange={(e) => setDataField(e.target.value)}
                required
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
