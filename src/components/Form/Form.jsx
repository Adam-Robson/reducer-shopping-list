import { useState } from 'react';
function Form({ 
  onSubmit 
}) {

  const [description, setDescription] = useState('');
  const [qty, setQty] = useState(1);

  return (
    <>
      <form onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(description, qty);
      } }>

        <textarea 
          value={ description }
          onChange={ (ev) => {
            setDescription(ev.target.value);
          } } />

        <input
          type="number"
          placeholder="#"
          value={ qty }
          onChange={ (ev) => {
            setQty(ev.target.value);
          } } />
          
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Form;
