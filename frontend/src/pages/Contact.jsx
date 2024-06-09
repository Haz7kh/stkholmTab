import { useState } from "react";
import Hero from "../components/Hero";
import { submitContactForm } from "../api"; // Import the new API function
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false); // New state variable

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContactForm(formData); // Use the new API function
      setSubmitted(true); // Set the submitted state to true
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  if (submitted) {
    return (
      <>
        <Hero pageTitle="Contact Us" />
        <section className="contact-section">
          <div className="contact-container">
            <h2 className="contact-title">Tack för att du kontaktade oss!</h2>
            <p className="contact-subtitle">
              Vi återkommer till dig så snart som möjligt.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Hero pageTitle="Contact Us" />
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="contact-title">Kontakta oss</h2>
            <p className="contact-subtitle">
              Några frågor eller synpunkter? Skriv bara ett meddelande till oss!
            </p>
            <div className="contact-details">
              <p>
                <i className="fas fa-phone"></i> +10022970112
              </p>
              <p className="email">
                <i className="fas fa-envelope"></i> info@stockholmtab.com
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                Svetsarvägen 15, 171 41 Solna
              </p>
            </div>
            <div className="contact-social">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-slack"></i>
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <h2>Kontak Form</h2>
              <label htmlFor="email">E-post</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">Fullständigt namn</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="phone">Telefonnummer</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label htmlFor="message">Meddelande</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Skicka Meddelande</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
