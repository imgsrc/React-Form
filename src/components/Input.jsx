import React from 'react';

function Input( { type, name, placeholder } ) {
  return (
    <div className="mdc-textfield">
      <input type={type} name={name} className="mdc-textfield__input" placeholder={placeholder}/>
    </div>
  );
}

export default Input;