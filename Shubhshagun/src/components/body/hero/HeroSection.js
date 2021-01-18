import React from 'react';
import '../../../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://res.cloudinary.com/flash-cloud/video/upload/v1616935950/video-4_eyejr6.mp4' autoPlay loop muted />
      <h1>The Ritual Of Happiness</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
