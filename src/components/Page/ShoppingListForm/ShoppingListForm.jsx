
export default function ShoppingListForm({ 
  newItemBody, 
  onBodyChange,
  onSubmit }) {
  return (
    <>
      <form onSubmit={() => {
        onSubmit(newItemBody);
      } }>
        <textarea value={ newItemBody }  onChange={(ev) => {
          onBodyChange(ev.target.value);
        } } />
        <button type="submit">submit</button> 
      </form>
    </>
  );
}

