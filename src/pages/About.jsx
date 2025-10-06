import React from 'react'

export default function About() {
  return (
    <section className="container about-page">
      <h2>About Aniket Traders</h2>

      <p>
        At <span className="name-highlighted">Aniket Traders</span> we take pride in being a leading exporter of Indian turmeric,
        specializing in turmeric finger and turmeric powder. We are passionate about delivering the finest turmeric
        products. Founded on traditional knowledge and modern quality control, Aniket Traders supplies top-grade
        turmeric products across domestic and international markets. We focus on traceability, hygiene and consistent quality.
      </p>

      <div className="about-grid">
        <div className="card">
          <h4>Our Mission</h4>
          <p>Deliver consistent, trusted turmeric products that keep customers coming back — quality, traceability and service.</p>
        </div>

        <div className="card">
          <h4>Quality</h4>
          <p>Moisture-controlled drying and tested batches to ensure vibrant color, aroma and long shelf life.</p>
        </div>
      </div>

      {/* Journey */}
      <section className="about-journey">
        <h3>Our Journey</h3>
        <p className="small-lead">From a local trader in 1998 to a trusted supplier across domestic and international markets — a timeline of important milestones.</p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">1998</div>
            <div className="timeline-content">
              <h4>Founded</h4>
              <p>Started as a family-owned spice trading business serving local markets with honest pricing and fresh produce.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2007</div>
            <div className="timeline-content">
              <h4>Processing & Standards</h4>
              <p>Opened our first processing unit — introduced controlled drying, grading and basic quality checks.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2015</div>
            <div className="timeline-content">
              <h4>Exports Begin</h4>
              <p>Expanded to supply national retailers and began exporting to international buyers with improved packing.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2020+</div>
            <div className="timeline-content">
              <h4>Traceability & Growth</h4>
              <p>Implemented batch traceability and stricter QC protocols; strengthened farmer partnerships and scaled logistics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="commitments">
        <h3>Our Commitments</h3>
        <p className="small-lead">We operate with clear commitments that guide every shipment and partnership.</p>

        <div className="commitments-grid">
          <div className="commit-card">
            <div className="commit-icon">🌱</div>
            <h4>Farmer Improvement</h4>
            <p>We work with growers to improve yields, provide fair pricing and share best farming practices.</p>
          </div>

          <div className="commit-card">
            <div className="commit-icon">🔎</div>
            <h4>Quality & Traceability</h4>
            <p>Every batch is tested and traceable — from field to packing — to ensure consistent standards.</p>
          </div>

          <div className="commit-card">
            <div className="commit-icon">♻️</div>
            <h4>Sustainable Sourcing</h4>
            <p>We encourage eco-friendly drying and packaging to reduce waste and support long-term supply health.</p>
          </div>

          <div className="commit-card">
            <div className="commit-icon">🚚</div>
            <h4>Reliable Delivery</h4>
            <p>Planned logistics and buffer stock ensure on-time delivery and dependable supply for our customers.</p>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="join-us">
        <h3>Join Us</h3>
        <p className="small-lead">Looking for career opportunities, supply partnerships or to become a distributor? Reach out — we’d love to hear from you.</p>

        <div className="join-card">
          <p><strong>Partnerships & Sales:</strong> <a href="mailto:saiprasadkhansole@gmail.com">saiprasadkhansole@gmail.com</a></p>
          <p><strong>Phone / WhatsApp:</strong> <a href="tel:+919579781438">+91 9579781438</a></p>

          <div className="join-actions">
            <a className="btn" href="mailto:saiprasadkhansole@gmail.com?subject=Partnership%20Enquiry">Email Us</a>
          </div>
        </div>
      </section>
    </section>
  )
}
