import Item from '../Item/Item';

function List({ list, handleCheckedById }) {
  console.log('List', { list });
  return (
    <>
      <ol style={ { height: '500px', border: 'red solid 3px' } }>
        {
          list.map(item => {
           
            return <li key={ item.id }>
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
