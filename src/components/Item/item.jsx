
export default function Item({ listItem, handleViewedItem }) {
  return (
    <>
      <section className="list-item-wrap">
        <input 
          type="checkbox" 
          value={ listItem.viewed } 
          onChange={ () => {
            handleViewedItem(!listItem.viewed);
          } }
        /></section>
    </>
  );
}
