import { useState } from "react";
import axios from "axios";

const API_URL = "https://contact-manager-mern-app.onrender.com/api/contacts";

function ContactForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const isInvalid = !form.name || !form.email || !form.phone;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Required check
    if (isInvalid) {
      setError("Name, Email and Phone are required");
      return;
    }

    // Email validation (basic)
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Phone validation (digits only, length 10–15)
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(form.phone)) {
      setError("Phone number should contain 10–15 digits only");
      return;
    }

    await axios.post(API_URL, form);

    setForm({ name: "", email: "", phone: "", message: "" });
    setSuccess("Contact submitted successfully!");
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name *"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email *"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone *"
        value={form.phone}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Message (optional)"
        value={form.message}
        onChange={handleChange}
      />

      {isInvalid && (
        <p style={{ fontSize: "14px", color: "#555" }}>
          Please fill all required fields (*)
        </p>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p className="success">{success}</p>}

      <button type="submit" disabled={isInvalid}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
