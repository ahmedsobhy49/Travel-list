import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ListItem = ({
  itemName,
  packed,
  itemCount,
  data,
  setData,
  id,
  onDeleteItem,
}) => {
  const [isPacked, setIsPacked] = useState(packed);

  useEffect(() => {
    setIsPacked(packed);
  }, [packed]);

  const handleCheckboxChange = () => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, packed: !isPacked } : item
    );
    setData(updatedData);
  };

  return (
    <li>
      <span>
        <input
          type="checkbox"
          checked={isPacked}
          onChange={handleCheckboxChange}
        />
      </span>
      <span style={isPacked ? { textDecoration: "line-through" } : {}}>
        <span>{itemCount} </span>
        <span>{itemName}</span>
      </span>
      <button onClick={() => onDeleteItem(id)}>
        <span>❌ {packed}</span>
      </button>
    </li>
  );
};

ListItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  packed: PropTypes.bool.isRequired,
  itemCount: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default ListItem;
