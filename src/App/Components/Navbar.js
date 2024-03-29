import React from 'react';
import SnV from '../../resources/images/logo/SnV_Logo_Line_Solid.png'

const Navbar = () => {

  const NavOptions = [''];

  return (
    <React.Fragment>
      <nav className="navbar is-spaced is-primary is-hidden-touch is-hidden-desktop-only" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-item" href="/">
              <img src={SnV} alt="Save n Vacations"/>
            </span>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              {NavOptions.map((item) => 
                <div className="navbar-item is-flex" key={item}>
                  <p className="title has-text-black is-size-5">
                    {<span>{item.charAt(0)}</span>}{item.substring(1)}
                  </p>
                  <span id='line'></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;