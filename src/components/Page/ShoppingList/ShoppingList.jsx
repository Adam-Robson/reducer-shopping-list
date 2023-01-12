import ShoppingListItem from '../ShoppingListItem/ShoppingListItem.jsx';

const ShoppingList = ({ itemList, handleViewedItem }) => {
  return (
    <>
      <ol>
        {itemList.map(item => {
          <li key={item.id}>
            <ShoppingListItem item={ item } handleViewedItem={(viewed) => {
              handleViewedItem(item.id, viewed);
            } } />
          </li>;
        })}
      </ol>
      
    </>
  );
};

export default ShoppingList;
