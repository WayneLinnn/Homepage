import { useState } from "react";
import "./Contact.css";

const API_BASE = import.meta.env.VITE_API_URL || "";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Network error. Check that the backend is running or set VITE_API_URL.",
      );
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-heading">
          <span className="section-num">04.</span> Contact
        </h2>
        <p className="contact-intro">
          Open to backend, full-stack, and AI-product opportunities in
          Australia. Reach out via the form below or{" "}
          <a href="mailto:waynelinEU@gmail.com">waynelinEU@gmail.com</a>. You
          can also{" "}
          <a
            href="/full-stack-ai-developer-feng-lin-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            view my full résumé (PDF)
          </a>
          .
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </label>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message"
            />
          </label>
          {status === "success" && (
            <p className="form-status success">
              Thanks, your message was sent.
            </p>
          )}
          {status === "error" && (
            <p className="form-status error">{errorMsg}</p>
          )}
          <button type="submit" className="btn" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
