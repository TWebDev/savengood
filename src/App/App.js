import React from 'react';
import Navbar from './Components/Navbar';
import Parallax from 'parallax-js';
import Glide from '@glidejs/glide';

import Sea from '../resources/images/sea.jpg'
import FloatingTitle from './Components/FloatingTitle';
import SliderGlider from './Components/SliderGlider';

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
  const Slider = <SliderGlider></SliderGlider>;

  return (
    <React.Fragment>
      <div className="App">
        {Nav}
        <div className="container is-widescreen is-gapless">
          <div id="scene">
            <div className="container" data-depth='0.5'>
              {Title}
            </div>
          </div>
          {Slider}
          <div className="has-background-primary has-shadow-1" data-depth='0.2'>
            <div className="columns">
              <div className="column is-one-quarter has-background-info">
                <section className="section">
                  <h1 className="title has-text-white has-text-shadow is-size-2-desktop"><span>B</span>ook <span>n</span>ow!</h1>
                </section>
              </div>
              <div className="column">
                <div className="section">

                </div>
              </div>
            </div>
          </div>
        </div>
        <img className='is-overlay' id='bg-image' src={Sea} alt="Beach"/>
      </div>
    </React.Fragment>
  );
}

export default App;
