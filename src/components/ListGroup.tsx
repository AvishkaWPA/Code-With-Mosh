import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item:string) => void;
}

function ListGroup({items,heading,onSelectItem}: Props) {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //  let selectedIndex = -1;

  //conditional rendering
  //   if (items.length === 0) {
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No items found</p>
  //       </>
  //     );
  //   }

  //conditional rendering
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No items found</p> : null;
  //   };

  //   //event handler
  //   const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
  //     console.log(event);
  //   };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No items found</p> : null}
      {items.length !== 0 && <p>cities in sri lanka</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
            }
        }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
