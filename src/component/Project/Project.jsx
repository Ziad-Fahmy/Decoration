import "./Project.css";

import projectCard1 from "../../assets/projectCard1.png";
import projectCard2 from "../../assets/projectCard2.png";
import projectCard3 from "../../assets/projectCard3.png";
import projectCard4 from "../../assets/projectCard4.png";

function Project() {
  return (
    <div className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-item">
          <img
            src={projectCard1}
            alt="projectCard"
            className=" gallery-image gallery-image1"
          />
          <div className="gallery-info">
          <div className="gallery-info-text">
              <h3>Modern Kitchen</h3>
              <p>Decor / Architecture</p>
            </div>
            <button className="arrow-button">➔</button>
          </div>
        </div>

        <div className="gallery-item">
          <img
            src={projectCard2}
            alt="projectCard"
            className="gallery-image gallery-image2"
          />
          <div className="gallery-info">
          <div className="gallery-info-text">
              <h3>Modern Kitchen</h3>
              <p>Decor / Architecture</p>
            </div>
            <button className="arrow-button">➔</button>
          </div>
        </div>

        <div className="gallery-item">
          <img
            src={projectCard3}
            alt="projectCard"
            className="gallery-image gallery-image3"
          />
          <div className="gallery-info">
          <div className="gallery-info-text">
              <h3>Modern Kitchen</h3>
              <p>Decor / Architecture</p>
            </div>
            <button className="arrow-button">➔</button>
          </div>
        </div>

        <div className="gallery-item">
          <img
            src={projectCard4}
            alt="projectCard"
            className="gallery-image gallery-image4"
          />
          <div className="gallery-info">
            <div className="gallery-info-text">
              <h3>Modern Kitchen</h3>
              <p>Decor / Architecture</p>
            </div>
            <button className="arrow-button">➔</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
