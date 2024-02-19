import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

const ListItems = ({ data, setData, onDeleteItem, order }) => {
  let sortedData;
  if (order === "input") {
    sortedData = data;
  }
  if (order === "name") {
    sortedData = data
      .slice()
      .sort((a, b) => a.itemName.localeCompare(b.itemName));
  }
  if (order === "packed") {
    sortedData = data
      .slice()
      .sort((a, b) => (a.packed === b.packed ? 0 : a.packed ? -1 : 1));
  }

  return (
    <div className="list-container">
      <ul className="list-item">
        {sortedData.map((obj) => (
          <React.Fragment key={obj.id}>
            <ListItem
              id={obj.id}
              setData={setData}
              data={data}
              itemName={obj.itemName}
              itemCount={obj.itemCount}
              packed={obj.packed}
              onDeleteItem={onDeleteItem}
            />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

ListItems.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
};

export default ListItems;
