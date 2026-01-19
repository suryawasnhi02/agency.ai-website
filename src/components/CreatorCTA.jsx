import React from "react";
import "../styles/creatorcta.css";
import { Link } from "react-router-dom";

const CreatorCTA = () => {
  return (
    <section className="creator-cta">
      <div className="creator-cta-content">
        <h1>
          New-Age Media <br />
          Breakout Stories <br />
          <span>All-Star Creators</span>
        </h1>

        <Link to="/contact">
  <button className="creator-cta-btn">
    Connect with us
  </button>
</Link>
      </div>
    </section>
  );
};

export default CreatorCTA;
