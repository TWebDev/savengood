import React from 'react';
import Navbar from './Components/Navbar';
import Parallax from 'parallax-js';
import Glide from '@glidejs/glide';

import Sea from '../resources/images/sea.jpg'
import FloatingTitle from './Components/FloatingTitle';
import SliderGlider from './Components/SliderGlider';
import HeroForm from './Components/Form/HeroForm';
import Popper from './Components/Popper';

function App() {
  window.addEventListener('load', () => {
    var scene = document.getElementById('scene');
    var text = document.getElementById('text-parallaxed');
    new Parallax(scene);
    new Parallax(text)

    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      autoplay: 2000
    })
    .mount()
  })

  const Nav = <Navbar></Navbar>;
  const Title = <FloatingTitle></FloatingTitle>;
  const Slider = <SliderGlider></SliderGlider>;
  const heroForm = <HeroForm></HeroForm>;

  return (
    <React.Fragment>
      {Nav}
      <section className='hero'>
        <section className="hero-body is-hidden-touch is-hidden-desktop-only" id="scene">
          {Title}
        </section>
      </section>
      {Slider}
      <div className="container is-widescreen is-gapless">
        <div className="columns is-marginless">
          <div className="column is-one-quarter">
            <section className="section">
              <h1 className="title has-text-white has-text-90s is-size-2-desktop"><span>B</span>ook <span>n</span>ow!</h1>
            </section>
          </div>
          <div className="column">
            <div className="section">
              <h1 className="title has-text-white has-text-shadow">An <span>A</span>gent will be soon in <span>C</span>ontact with you</h1>
              {heroForm}
            </div>
          </div>
        </div>
      </div>
      <section className="hero is-fullheight has-background-info has-shadow-3" id='any'>
        <div className="hero-body">
          <div className="container">
            <div className="section">
              <div id='text-parallaxed'>
                <h1 className="title is-size-0 has-text-primary" data-depth='0.5'><span>W</span>ait, do you <span>k</span>now what can you do in <span>M</span>exico?</h1>
                <h1 className="title is-size-0 has-text-white" data-depth='0.25'><span>W</span>ait, do you <span>k</span>now what can you do in <span>M</span>exico?</h1>
              </div>
            </div>
            <div className="level">
              <div className="level-item has-text-primary">
                <i className='has-text-shadow fas fa-chevron-down fa-5x'></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-fullheight">
        <Popper></Popper>
      </section>
      <img className='is-overlay is-hidden-touch is-hidden-desktop-only' id='bg-image' src={Sea} alt="Beach"/>
    </React.Fragment>
  );
}

export default App;
