import React from 'react';

const Select = (props) => {
  let 
  {
    Options,
    Name,
    _Id
  } = props;
  return (
    <React.Fragment>
      <div className="select">
        <select className='has-text-white' name={Name} id={_Id}>
          {Options.map((item) => 
            <option key={item} value={item}>{item}</option>  
          )}
        </select>
      </div>
    </React.Fragment>
  )
}

export default Select;