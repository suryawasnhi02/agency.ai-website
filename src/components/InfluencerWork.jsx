import React from "react";
import { motion } from "framer-motion";
import "../styles/influencerwork.css"; // ✅ CORRECT PATH


const influencers = [
  {
    name: "Sutej Pannu",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "Priyam Saraswat",
    location: "Delhi, India",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    name: "Mumbiker Nikhil",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    name: "Harsh Likhari",
    location: "Punjab",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
  },
  {
    name: "Joseph Radhik",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    name: "Pearle Maaney",
    location: "Kochi",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    name: "Ankit Baiyanpuria",
    location: "Haryana",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
  },
  {
    name: "Yashi Tank",
    location: "Jaipur",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
];

const InfluencerWork = () => {
  return (
    <section className="influencer-section">
      <div className="influencer-header">
        <h2>
          Helping the best in creator economy to scale...       <br /> ... Build a
          
          <span>  Lasting impact.</span>
        </h2>
      </div>

      <div className="influencer-grid">
        {influencers.map((item, index) => (
          <motion.div
            key={index}
            className={`influencer-card ${
              index % 2 === 0 ? "zig-left" : "zig-right"
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.name} />
            <div className="card-overlay">
              <h4>{item.name}</h4>
              <p>{item.location}</p>
              <span className="plus">+</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InfluencerWork;
