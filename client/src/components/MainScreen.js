import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainScreen.css';

function MainScreen() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>YOUR DREAMS MATTER</h1>
      <p>Let's talk about that</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          TRIAL 
        </Button>
      </div>
    </div>
  );
}

export default MainScreen;
