import Item from '../Item';

export default function List({ itemList, handleViewed }) {
  return (
    <>
      <ol>
        {
          itemList.map(item => {
            <li key={ item.id }>
              <Item 
                item={ item }
                handleViewed={
                  viewed => {
                    handleViewed(item.id, viewed);
                  } } />
            </li>;
          })
        }
      </ol>
    </>
  );
}
