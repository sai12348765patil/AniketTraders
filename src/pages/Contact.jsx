import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleWhatsAppSend = () => {
        if (!fullName || !email || !phone || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const text = encodeURIComponent(
            `Hello, this is a query from Ishwar Trading Company's website:\n\n` +
            `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
        );
        window.open(`https://wa.me/911234567890?text=${text}`, "_blank");
    };

    return (
        <section className="container contact-page">
            <h2>Let's Get in Touch</h2>
            <p className="lead">We’d love to hear from you. Please fill in your details below.</p>

            {/* Form Section */}
            <div className="contact-form-box">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-grid">
                        <label>
                            Full Name
                            <input
                                type="text"
                                placeholder="Your full name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </label>
                        <label>
                            Email Address
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label>
                            Phone Number
                            <input
                                type="tel"
                                placeholder="+91 98765 43210"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>
                    </div>
                    <label>
                        Message
                        <textarea
                            placeholder="Tell us your requirements..."
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                    <button className="btn whatsapp-btn" type="button" onClick={handleWhatsAppSend}>
                        <FaWhatsapp size={18} style={{ marginRight: "8px" }} /> Send via WhatsApp
                    </button>
                </form>
            </div>

            {/* Our Contacts Section */}
            <div className="our-contacts">
                <h3>Our Contacts</h3>
                <div className="contact-cards">
                    <div className="contact-card">
                        <FaPhoneAlt className="icon" />
                        <div>
                            <p><strong>+91 98765 43210</strong></p>
                            <p><strong>+91 91234 56789</strong></p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <FaEnvelope className="icon" />
                        <div>
                            <p>info@ishwartrading.com</p>
                            <p>sales@ishwartrading.com</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <FaMapMarkerAlt className="icon" />
                        <div>
                            <p>
                                Head Office: Ishwar Trading Company,<br />
                                Hyder Bagh, Dashmesh Nagar,<br />
                                Nanded, Maharashtra – 431602, India
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Section */}
            <div className="social-links">
                <h3>Website & Social Media</h3>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon fb"><FaFacebook /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon linkedin"><FaLinkedin /></a>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.54134194672878!2d77.3144976612871!3d19.166290232334003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d65c057b266d%3A0x1b3b0fddb1e25744!2s5887%2BGR5%2C%20Hyder%20Bagh%2C%20Dashmesh%20Nagar%2C%20Harsh%20Nagar%2C%20Nanded%2C%20Nanded-Waghala%2C%20Maharashtra%20431602!5e0!3m2!1sen!2sin!4v1759132048079!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    title="Map"
                ></iframe>
            </div>
        </section>
    );
}
