import ShoppingListItem from './ShoppingListItem';

const ShoppingList = () => {
  return (
    <>
      <ol>
        {ShoppingList.map(item => {
          return <li key={item.id}><ShoppingListItem item={ item } /></li>;
        })}
      </ol>
      
    </>
  );
};

export default ShoppingList;
