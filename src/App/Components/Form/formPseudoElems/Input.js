import React from 'react';

const Input = (props) => {
  let 
  {
    Type,
    Name,
    _Id,
    Placeholder,
    Value,
    formHandler
  } = props;

  return (
    <React.Fragment>
      <input 
        className="input" 
        type={Type}
        name={Name}
        id={_Id} 
        placeholder={Placeholder}
        value={Value}
        onChange={formHandler}
      >
      </input>
    </React.Fragment>
  )
}

export default Input;