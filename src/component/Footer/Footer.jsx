import React from "react";
import "./Footer.css";
import {
  FaCheck,
  FaChessBoard,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Logo</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when lookings at its layouts the
            points of using.
          </p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f">
                <FaFacebook />
              </i>
            </a>
            <a href="#">
              <i className="fab fa-twitter">
                <FaTwitter />
              </i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in">
                <FaLinkedin />
              </i>
            </a>
            <a href="#">
              <i className="fab fa-instagram">
                <FaInstagram />
              </i>
            </a>
          </div>
        </div>
        <div className="footer-pages">
          <h3>Pages</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Projects</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#">Kitchen</a>
            </li>
            <li>
              <a href="#">Living Area</a>
            </li>
            <li>
              <a href="#">Bathroom</a>
            </li>
            <li>
              <a href="#">Dining Hall</a>
            </li>
            <li>
              <a href="#">Bedroom</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>55 East Birchwood Ave.</p>
          <p>Brooklyn, New York 11201</p>
          <p>contact@interno.com</p>
          <p>(123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
