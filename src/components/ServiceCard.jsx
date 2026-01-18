import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-card-content">

        {/* Icon */}
        <div className="service-icon">
          <img src={service.icon} alt={service.title} />
        </div>

        {/* Text */}
        <div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>

      </div>
    </div>
  );
};

export default ServiceCard;
