const ShoppingListItem = ({ listItem, handleViewedItem }) => {
  return (
    <>
      <input type="checkbox" value={ listItem.viewed } onChange={ () => {
        handleViewedItem(!listItem.viewed);
      }} />
      
    </>
  );
};

export default ShoppingListItem;
