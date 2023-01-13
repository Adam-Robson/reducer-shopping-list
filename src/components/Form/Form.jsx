
function Form({ 
  newText, 
  newQty, 
  onTextChange, 
  onQtyChange,
  onSubmit 
}) {
  return (
    <>
      <form onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(newText, newQty);
      } }>

        <textarea 
          value={ newText }
          onChange={ (ev) => {
            onTextChange(ev.target.value);
          } } />

        <input
          value={ newQty }
          onChange={ (ev) => {
            onQtyChange(ev.target.value);
          } } />

      </form>
    </>
  );
}

export default Form;
