
export default function Form({
  newItemBody,
  onSubmit,
  onBodyChange
}) {
  return (
    <>
      <form onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(newItemBody);
      } }>
        <textarea value={ newItemBody }
          onChange={(ev) => {
            onBodyChange(ev.target.value);
          } } />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
