const ShoppingListItem = ({ item }) => {
  return (
    <>
      {item.id}
      {item.item}
      {item.complete}
      {item.quantity}
      
    </>
  );
};

export default ShoppingListItem;
