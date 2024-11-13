import React from 'react';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

import { Reveal } from 'react-awesome-reveal';
import { Carousel } from 'react-responsive-carousel';

import firstSectionBgImage from './assets/image 1.jpg';
import arunaLogoYellow from './assets/Aruna-logo-yellow.png';
import carouselImages from './assets/Fotos Aruna';
import slogan from './assets/slogan.svg';

import { Button } from './components/button';

function App() {

  const _ = require('lodash');

  return (
    <div className="App">
      

      <div className="first-section">
        <img src={firstSectionBgImage} className="first-section-bg-image"/>
        <div className="first-section-gradient"/>
        <div className="first-section-content">

          <div className="first-group">
            <Reveal cascade triggerOnce>

              <span className="local">ITAPEMA · <span>MEIA PRAIA</span></span>
              <div className="second-line">
                <img src={arunaLogoYellow}/>
                <div className="title">
                  <span className="line-one">ARUNA TOWER</span>
                  <span className="line-two">RESIDENCE</span>
                </div>
              </div>

            </Reveal>
          </div>
    	    <Reveal cascade triggerOnce delay={1000}>

            <div className="sub-headline">
              Quando seu <span>sentimento</span> e sua <span>consciência</span> tomam a forma de um lar.
              <br/><br/>
              Um empreendimento que segue o <span>alto padrão</span> de qualidade
              e onde seus idealizadores se inspiram na tecnologia da 
              <span> inteligência artificial</span> e no planejamento <span>auto-sustentável.</span>
            </div>

            <Button/>
            
          </Reveal>
        </div>
          

      </div>

      <div className="second-section">
        <div className="slideshow">
          <div className="carousel-bg"/>
          <Carousel emulateTouch swipeable infiniteLoop showThumbs={false} 
            showIndicators={false} showStatus={false} width="1100px" 
            autoPlay interval={3000} className="carousel">
            {
              Object.entries(carouselImages).map(([key, value]) => {
                return (
                  <div key={key}>
                    <img className="carousel-image" src={value}/>
                    <div className="legend">{_.startCase(key)}</div>
                  </div>
                );
              })
            }
          </Carousel>
        </div>

        <div className="after-carousel">
          <Reveal cascade triggerOnce>
            <img src={slogan} alt="Living the Nature" />
            <div className="paragraphs">
              Existem motivos pelos quais nossa vida se torna mais encantadora. 
              Mas isso só é possível quando consideramos e planejamos o nosso futuro. 
              <span> E criar esse cenário perfeito nunca foi tão real.</span>
              <br/><br/>
              <span>Um projeto que vai muito além de um nome. </span>
              É um sentimento que traduz toda essência de sua proposta. 
              Uma verdadeira aliança entre <span>beleza, sofisticação e felicidade.</span>
            </div>
            </Reveal>
        </div>

      </div>

    </div>
  ); 
}

export default App;
