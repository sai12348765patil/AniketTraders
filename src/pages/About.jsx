import React from 'react'

export default function About() {
  return (
    <section className="container about-page">
      <h2>About Ishwar Trading Company</h2>

      <p>
        At <span className="name-highlighted">Ishwar Trading Company</span> we take pride in being a leading exporter of Indian turmeric,
        specializing in turmeric finger and turmeric powder. We are passionate about delivering the finest turmeric products.
        Founded on traditional knowledge and modern quality control, Ishwar Trading Company supplies top-grade turmeric products
        across domestic and international markets. We focus on traceability, hygiene and consistent quality.
      </p>

      <div className="about-grid">
        <div className="card">
          <h4>Our Mission</h4>
          <p>Deliver consistent, trusted turmeric products that keep customers coming back.</p>
        </div>

        <div className="card">
          <h4>Quality</h4>
          <p>Moisture-controlled drying and tested batches to ensure vibrant color and aroma.</p>
        </div>
      </div>
    </section>
  )
}
