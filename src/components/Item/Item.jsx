export default function Item({ 
  item, 
  toggleChecked, 
}) {
  return (
    <>
      <section>
        <input 
          type="checkbox"
          value={ item.checked }
          onChange={ () => {
            toggleChecked(!item.checked);
          } } />

      </section>
    </>
  );
}
