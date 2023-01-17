// import { useState } from 'react';
function Form({ 
  // onSubmit,
  description,
  onDescriptionChange,
  qty,
  onQtyChange 
}) {

  // const [description, setDescription] = useState('');
  // const [qty, setQty] = useState(1);

  return (
    <>
      <form>

        <textarea 
          value={ description }
          onChange={ (ev) => {
            onDescriptionChange(ev.target.value);
          } }
        />

        <input
          type="number"
          placeholder="#"
          value={ qty }
          onChange={ (ev) => {
            onQtyChange(ev.target.value);
          } } />
          
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Form;
