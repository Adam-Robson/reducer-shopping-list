export default function Form({
  newText,
  onSubmit,
  onBodyChange
}) {
  return (
    <>
      <form onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(newText);
      } }>
        <textarea value={ newText }
          onChange={(ev) => {
            onBodyChange(ev.target.value);
          } } />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
