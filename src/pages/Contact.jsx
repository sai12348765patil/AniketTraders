import React, { useState } from 'react'

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSend = () => {
        if (!name || !email || !message) {
            alert("Please fill in all fields.")
            return
        }
        console.log("Send message:", { name, email, message })
        // Encode data so it works in a URL
        const subject = encodeURIComponent("Product Enquiry from " + name)
        const body = encodeURIComponent(
            `Hello, my name is ${name}.\nEmail: ${email}\n\nMessage:\n${message}`
        )

        // Option 1: Send via Email
        window.location.href = `mailto:saiprasadkhansole@gmail.com?subject=${subject}&body=${body}`

    }

    return (
        <section className="container contact-page">
            <h2>Contact Us</h2>
            <p className="lead">
                Send your enquiry and we'll respond with pricing and delivery times.
            </p>

            <div className="contact-grid">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <label>
                        Name
                        <input
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Email
                        <input
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Message
                        <textarea
                            placeholder="Tell us what you need"
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                    <button className="btn" type="button" onClick={handleSend}>
                        Send Message
                    </button>
                </form>

                <aside className="contact-info">
                    <h4>Quick Contact</h4>
                    <p>Phone: +91 12345 67890</p>
                    <p>Email: info@ishwartrading.example</p>
                    <p>WhatsApp: +91 12345 67890</p>
                    <div className="map-container">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.54134194672878!2d77.3144976612871!3d19.166290232334003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d65c057b266d%3A0x1b3b0fddb1e25744!2s5887%2BGR5%2C%20Hyder%20Bagh%2C%20Dashmesh%20Nagar%2C%20Harsh%20Nagar%2C%20Nanded%2C%20Nanded-Waghala%2C%20Maharashtra%20431602!5e0!3m2!1sen!2sin!4v1759132048079!5m2!1sen!2sin" 
                          width="500" 
                          height="400" 
                          style={{ border: 0, borderRadius: "12px", marginBottom: "50px" }}   
                          allowFullScreen="" 
                          loading="lazy" 
                          referrerpolicy="no-referrer-when-downgrade">
                          </iframe>
                    </div>
                </aside>
            </div>
        </section>
    )
}
