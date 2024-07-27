import React from "react";
import "./ServicesSection.css";

function ServicesSection() {
  const services = [
    {
      title: "Project Plan",
      description: "There are many variations of the passages of lorem Ipsum from available, majority.",
      link: "#"
    },
    {
      title: "Interior Work",
      description: "There are many variations of the passages of lorem Ipsum from available, majority.",
      link: "#"
    },
    {
      title: "Realization",
      description: "There are many variations of the passages of lorem Ipsum from available, majority.",
      link: "#"
    }
  ];

  return (
    <div className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.link} className="read-more">Read More &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
