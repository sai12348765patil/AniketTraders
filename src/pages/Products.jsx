import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import finger1 from '../assets/finger1.jpeg'
import finger2 from '../assets/finger1.jpeg'
import finger3 from '../assets/finger1.jpeg'

import powder1 from '../assets/powder1.jpeg'
import powder2 from '../assets/powder1.jpeg'
import powder3 from '../assets/powder1.jpeg'

import bulb1 from '../assets/bubl1.jpeg'
import bulb2 from '../assets/bubl1.jpeg'
import bulb3 from '../assets/bubl1.jpeg'

const products = [
  {
    id: 1,
    name: "Turmeric Fingers",
    desc: "Whole turmeric fingers, carefully handpicked, known for rich aroma and purity. Ideal for direct use or further processing.",
    images: [finger1, finger2, finger3],
  },
  {
    id: 2,
    name: "Turmeric Powder",
    desc: "Finely ground turmeric powder with a vibrant yellow hue and authentic flavor. Perfect for culinary, medicinal, and industrial uses.",
    images: [powder1, powder2, powder3],
  },
  {
    id: 3,
    name: "Turmeric Bulb",
    desc: "Raw turmeric bulbs packed with essential curcumin, used in processing and traditional medicine. Guaranteed freshness and quality.",
    images: [bulb1, bulb2, bulb3],
  },
];

export default function Products({navigate, current}) {
  return (
    <section className="container products-page">
      <h2>Why Choose Turmeric?</h2>
      <p className="lead">
        Turmeric is celebrated for its medicinal value, vibrant flavor, and
        natural color. With its strong curcumin content, it supports health,
        boosts immunity, and adds unmatched taste to food.
      </p>

      <div className="products-list">
        {products.map((p) => (
          <article key={p.id} className="product-row">
            <div className="product-images">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
              >
                {p.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={img} alt={`${p.name} ${idx + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="product-info">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <a onClick={()=>navigate("/contact")} className="btn small">
                Request Quote
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
