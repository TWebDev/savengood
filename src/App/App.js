import React from 'react';
import Navbar from './Components/Navbar';
import Parallax from 'parallax-js';
import Glide from '@glidejs/glide';

import Sea from '../resources/images/sea.jpg'
import FloatingTitle from './Components/FloatingTitle';
import SliderGlider from './Components/Slider';

function App() {
  window.addEventListener('load', () => {
    var scene = document.getElementById('scene');
    new Parallax(scene);

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
  const Slider = <SliderGlider></SliderGlider>

  return (
    <div className="App">
      {Nav}
      <div id="scene">
        <div className="container is-widescreen" data-depth='1'>
          {Title}
        </div>
      </div>
      {Slider}
      <div className="container is-widescreen is-gapless has-background-primary has-shadow-1" data-depth='0.2'>
        <div className="columns">
          <div className="column is-one-third has-background-info">

          </div>
          <div className="column">

          </div>
        </div>
      </div>
      <img className='is-overlay' id='bg-image' src={Sea} alt="Beach"/>
    </div>
  );
}

export default App;
