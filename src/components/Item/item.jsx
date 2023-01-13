export default function Item({ item, toggleViewed }) {
  return (
    <>
      <section className="list-item-wrap">
        <input 
          type="checkbox" 
          value={ item.viewed } 
          onChange={ () => {
            toggleViewed(!item.viewed);
          } } />
        { item.id }
        { item.text}
      </section>
    </>
  );
}
