import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/contacts";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      setError("Name, Email and Phone are required");
      return;
    }

    await axios.post(API_URL, form);

    setForm({ name: "", email: "", phone: "", message: "" });
    setSuccess("Contact submitted successfully!");
    onAdd();
  };

  const isInvalid = !form.name || !form.email || !form.phone;

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p className="success">{success}</p>}

      <button type="submit" disabled={isInvalid}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
