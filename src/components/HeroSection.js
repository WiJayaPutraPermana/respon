import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <p>Biznids was invited at the Indonesia Pacific Forum for Development (IPFD) </p>
      <h2>Biznids was invited as one of the speakers at the Workshop on improving relations between SMEs </h2>
      <h2>in Pacific countries at the Indonesia Pacific Forum for Development in Nusa Dua Bali on 7 & 8 December 2022</h2>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          //   onClick={console.log('hey')}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
