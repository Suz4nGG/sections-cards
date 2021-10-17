import React from 'react';
import '../styles_components/SectionAbout.css';

export default function SectionAbout ({titleAbout, contentAbout, imageSrc, imageAlt}) {
  return (
    <div className="container-about">
      <div className="container-about-image">
        <img src={imageSrc} alt={imageAlt}/>
      </div>
    <div className="container-about-info">
      <div className="container-about-title">
        <header>
          <h1>{titleAbout}</h1>
        </header>
      </div>
        <p>
          {contentAbout}
        </p>
        <button className="container-about-btn">Know More</button>
    </div>
  </div>
  );
}