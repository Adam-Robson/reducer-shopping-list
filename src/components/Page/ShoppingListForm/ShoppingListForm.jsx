
export default function ShoppingListForm({ 
  newItemBody, 
  onBodyChange }) {
  return (
    <>
      <textarea value={ newItemBody }  onChange={(ev) => {
        onBodyChange(ev.target.value);
      } } />
      <button type="submit">submit</button> 
    </>
  );
}

