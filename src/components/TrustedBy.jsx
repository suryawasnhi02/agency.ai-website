import React from "react";
import { company_logos } from "../assets/assets";
import "../styles/trustedLeaders.css";

const TrustedBy = () => {
  return (
    <>
      

      {/* ===== NEW INDUSTRY LEADERS SECTION ===== */}
      <section className="trusted-section">
        <div className="trusted-container">

          {/* LEFT SIDE */}
          <div className="trusted-left">
            
            <h2 className="trusted-title">
              Trusted by <br />
              Industry <span>Leaders.</span>
            </h2>

            <div className="trusted-metrics">
              <div>
                <p className="metric-label">— CAMPAIGNS</p>
                <h3>10,000+</h3>
                <span>Impactful stories</span>
              </div>

              <div>
                <p className="metric-label">— BRANDS</p>
                <h3>200+</h3>
                <span>And counting</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – VERTICAL LOGO FLOW */}
          <div className="trusted-right">
            <div className="logo-marquee">
              <div className="logo-track">
                {[...company_logos, ...company_logos].map((logo, i) => (
                  <img key={i} src={logo} alt="brand" />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default TrustedBy;
