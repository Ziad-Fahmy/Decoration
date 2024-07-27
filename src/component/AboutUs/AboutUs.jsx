import aboutUsImg from '../../assets/aboutUs.jpg'

import './AboutUs.css'
function AboutUs() {
  return (
    <>
      <div className="aboutUs__container">
        <div className="aboutUs__text">
          <h1>We Create The Art Of Stylish Living Stylishly</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>

          
          <button className='button'>Get Free Estimate &rarr;</button>
        </div>

        <div className="aboutUs__img"> <img src={aboutUsImg} alt="aboutUsImg" /></div>
      </div>
    </>
  );
}

export default AboutUs;
