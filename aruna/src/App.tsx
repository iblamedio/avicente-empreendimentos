import React from 'react';
import { Fade, Reveal, Slide } from 'react-awesome-reveal';

import { LpSection } from './components/lpsection';
import { Card } from './components/card';
import { Button } from './components/button';

import './App.css';
import logo from './assets/logo-full-rotated.webp';

function App() {

  const paletteBlue: string = '#102236';
  const paletteGrey: string = '#848584';
  const paletteWhite: string = '#fbfefe';

  const firstSectionHeight: number = 90;

  return (
    <div className="App">
      <LpSection height={firstSectionHeight} textColor={paletteGrey}>
        <div className="bg-container">
          {/* <img src={logo} className="bg-logo" /> */}
          <div className="bg-gradient" style={{ height: `${firstSectionHeight}vh` }} />

          <div className="content">
            <Card/>

            <Button/>
          </div>

        </div>
      </LpSection>
      
      <LpSection height={50} bgColor={paletteWhite} />
    </div>
  ); 
}

export default App;
