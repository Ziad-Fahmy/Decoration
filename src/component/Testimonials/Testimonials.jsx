import React from "react";
import "./Testimonials.css";
import per1 from "../../assets/per1.jpg";
import per2 from "../../assets/per2.jpg";
import per3 from "../../assets/per3.jpg";
const testimonials = [
  {
    name: "Nattasha Mith",
    location: "Sydney, USA",
    image: per1,
    text: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
  },
  {
    name: "Raymond Galario",
    location: "Sydney, Australia",
    image: per2,
    text: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
  },
  {
    name: "Benny Roll",
    location: "Sydney, New York",
    image: per3,
    text: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-all-container">
        <div className="testimonials-section">
          <h1>
            What the People Thinks <br /> About Us
          </h1>
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial" key={index}>
                <div className="testimonials-card">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <div className="testimonials-card-content">
                    <h3>{testimonial.name}</h3>
                    <h4>{testimonial.location}</h4>
                  </div>
                </div>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
