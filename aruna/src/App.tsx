import React from 'react';
import { Fade, Reveal, Slide } from 'react-awesome-reveal';

import { LpSection } from './components/lpsection'
import './App.css';

function App() {

  const paletteBlue: string = '#102236';
  const paletteGrey: string = '#848584';

  return (
    <div className="App">
      <LpSection height={90} bgColor={paletteBlue} textColor={paletteGrey}>
        <Reveal>
          <h2>teste</h2>
        </Reveal>
      </LpSection>
      
      <LpSection height={50} bgColor={paletteGrey} />
    </div>
  );
}

export default App;
