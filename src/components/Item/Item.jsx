export default function Item({ 
  item, 
  handleChecked, 
}) {
  return (
    <>
      <section>
        <input 
          type="checkbox"
          value={ item.checked }
          onChange={ () => {
            handleChecked(!item.checked);
          } } />
        <p className="description">{ item.description }</p>
        <p className="qty">{ item.qty }</p>
      </section>
    </>
  );
}
