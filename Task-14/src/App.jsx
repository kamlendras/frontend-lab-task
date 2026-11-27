import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <br /><br />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <br /><br />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div>
          <h3>Submitted Values</h3>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Message: {submitted.message}</p>
        </div>
      )}
    </div>
  );
}