import { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ onAddItem }) => {
  const [itemName, setItemName] = useState("");
  const [itemCount, setItemCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName) {
      const newItem = { itemName, itemCount, packed: false, id: Date.now() };
      onAddItem(newItem);
      setItemName("");
      setItemCount(1);
    }
  };

  const numbersArray = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <form onSubmit={handleSubmit}>
      <select value={itemCount} onChange={(e) => setItemCount(+e.target.value)}>
        {numbersArray.map((optionNumber) => (
          <option key={optionNumber} value={optionNumber}>
            {optionNumber}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

Form.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default Form;
