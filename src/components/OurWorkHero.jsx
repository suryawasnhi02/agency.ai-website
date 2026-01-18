import React from "react";
import { motion } from "framer-motion";
import "../styles/ourWork.css";

const OurWorkHero = () => {
  return (
    
    <section className="work-hero">
      <motion.div
        className="work-hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="work-title">
          Our <span>Work..</span> 
        </h1>

        <motion.p
          className="work-subtitle"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We collaborate with ambitious brands to build impactful digital
          experiences that drive real results.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default OurWorkHero;
