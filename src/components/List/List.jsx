import Item from '../Item/Item';

export default function List({ list, handleViewedById }) {
  return (
    <>
      <ol>
        {
          list.map(item => {
            <li key={ item.id }>
              <Item 
                item={ item }
                handleViewed={
                  viewed => {
                    handleViewedById(item.id, viewed);
                  } } />
            </li>;
          })
        }
      </ol>
    </>
  );
}
