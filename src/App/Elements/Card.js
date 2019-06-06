import React from 'react';

const Card = (props) => {
  let
  {
    Ratio
  } = props;
  return ( 
    <React.Fragment>
      <div className="card">
        <div className="card-image">
          <figure className={`image ${Ratio}`}>
            <img src={Source} alt={Alt}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
   );
}
 
export default Card;