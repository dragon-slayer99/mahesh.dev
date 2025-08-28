import React, { useState } from "react";
import { Linkedin, Mail, Github, Quote } from "lucide-react";
import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // for success/error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Enhanced form data for Web3Forms
    const data = {

      access_key: "5dc96524-9ecb-4182-ac47-c65b770280f6",
      name: formData.name,
      email: formData.email,
      message: formData.message,
      // Add these required fields:
      from_name: formData.name,
      subject: `New message from ${formData.name}`,

    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Show the actual error message from Web3Forms
        setStatus(`Error: ${result.message || "Unknown error"} ❌`);
        console.error("Web3Forms error details:", result);
      }
    } catch (error) {
      setStatus("Network error ❌");
      console.error("Network error:", error);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}


        className="contact-title"

      >Contact Me</motion.h2>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}

        className="contact-links">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-icon linkedin">
          <Linkedin size={28} />
        </a>
        <a href="mailto:youremail@gmail.com" className="contact-icon gmail">
          <Mail size={28} />
        </a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="contact-icon github">
          <Github size={28} />
        </a>
        <a href="https://www.glassdoor.com/member/profile" target="_blank" rel="noopener noreferrer" className="contact-icon glassdoor">
          <Quote />
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="contact-btn">Send Message</button>
      </motion.form>

      {/* Status Message */}
      {status && <p className="form-status">{status}</p>}
    </section>
  );
}
