import React from "react";
import "../styles/serviceshero.css";

const ServicesHero = () => {
  return (
    <section className="services-hero">
      {/* Glow */}
      <div className="services-hero-bg" />

      <div className="services-hero-inner">

        {/* LEFT CONTENT */}
        <div className="services-hero-text">
          <h1>
            India’s Largest <br />
            <span>Creator Business</span>
          </h1>

          <p>
            85B+ views, iconic campaigns, impossible collabs,
            and culture-defining digital shows with top global brands.
          </p>

          <a href="/work" className="services-hero-link">
            The Proof is in the Work 👀
          </a>
        </div>

        {/* RIGHT VIDEO */}
        <div className="services-hero-video">
          <video
            src="https://files.tryflowdrive.com/9eRHAGuvzU_Shorter-show-reel----2620p.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <span className="video-caption">
            When brands let us cook
          </span>
        </div>

      </div>
    </section>
  );
};

export default ServicesHero;
