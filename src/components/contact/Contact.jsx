import React, { useState } from "react";
import { Linkedin, Mail, Instagram, Twitter, Quote, Github} from "lucide-react";
import "./Contact.css";

// Custom Glassdoor Icon
const GlassdoorIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M12 .5C5.65.5.5 5.65.5 12S5.65 23.5 12 23.5 23.5 18.35 23.5 12 18.35.5 12 .5Zm4.8 17.9H8.8v-2.7h6.3v-8.1h2.7v10.8Z" />
    </svg>
);

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Message sent! (Hook this up to EmailJS or backend)");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="contact-section" id="contact">
            <h2 className="contact-title">Contact Me</h2>

            {/* Social Links */}
            <div className="contact-links">
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-icon linkedin">
                    <Linkedin size={28} />
                </a>
                
                <a href="mailto:youremail@gmail.com" className="contact-icon gmail">
                    <Mail size={28} />
                </a>
                <a href="mailto:youremail@gmail.com" className="contact-icon github">
                    <Github size={28} />
                </a>


                <a href="https://www.glassdoor.com/member/profile" target="_blank" rel="noopener noreferrer" className="contact-icon glassdoor">
                    <Quote />
                </a>
            </div>

            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
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
            </form>
        </section>
    );
}
