import React, { useState, useEffect } from 'react'
import busCard from '../assets/busineescard.jpeg'
import finger1 from '../assets/Applogo.png'
import finger2 from '../assets/busineescard.jpeg'
import powder1 from '../assets/Applogo.png'
import powder2 from '../assets/busineescard.jpeg'

export default function Home() {
  // Slider state
  const [fingerIndex, setFingerIndex] = useState(0)
  const [powderIndex, setPowderIndex] = useState(0)

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFingerIndex(prev => (prev + 1) % fingerImages.length)
      setPowderIndex(prev => (prev + 1) % powderImages.length)
    }, 3000) // change every 3s

    return () => clearInterval(interval)
  }, [])

  const fingerImages = [finger1, finger2]
  const powderImages = [powder1, powder2]

  return (
    <section className="home-page">

      {/* Hero */}
      <div className="hero container">
        <div className="hero-left">
          <h1>Pure Turmeric. Trusted Quality.</h1>
          <p>
            Ishwar Trading Company supplies premium turmeric products — from raw roots to fine powder —
            suitable for retailers and manufacturers. Browse our selection and contact us for pricing.
          </p>
          <div className="hero-cta">
            <a className="btn" href="/products">View Products</a>
            <a className="btn outline" href="/contact">Request Quote</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="card-animate">
            <img src={busCard} alt="Business card" />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h4>Integrity & Transparency</h4>
            <p>We maintain honesty and openness in every business dealing, ensuring fair trade practices.</p>
          </div>
          <div className="value-card">
            <h4>Customer-Centric Approach</h4>
            <p>Our customers are at the heart of everything we do — we focus on their needs and satisfaction.</p>
          </div>
          <div className="value-card">
            <h4>Trust & Reliability</h4>
            <p>We build long-term relationships based on trust, delivering consistent quality every time.</p>
          </div>
        </div>
      </div>

      {/* Products Preview */}
      <div className="products-preview">
        <h2>Our Products</h2>

        <div className="product-slider">
          {/* Turmeric Fingers */}
          <div className="product-card">
            <h4>Turmeric Fingers</h4>
            <div className="slider auto">
              <img src={fingerImages[fingerIndex]} alt="Turmeric Fingers" />
            </div>
            <p>Premium-grade turmeric fingers, hand-selected for color, aroma, and purity.</p>
          </div>

          {/* Turmeric Powder */}
          <div className="product-card">
            <h4>Turmeric Powder</h4>
            <div className="slider auto">
              <img src={powderImages[powderIndex]} alt="Turmeric Powder" />
            </div>
            <p>Finely ground turmeric powder, perfect for culinary and medicinal uses worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
