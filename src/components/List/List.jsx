import Item from '../Item/Item';

function List({ list, handleCheckedById }) {
  return (
    <>
      <ol>
        {list.map(item => {
          <li key={ item.id }>
            <Item item={ item }
              handleChecked={
                checked => {
                  handleCheckedById(
                    item.id, 
                    checked);
                }
              } />
          </li>;
        })
        }
      </ol>
    </>
  );
}

export default List;
