import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import ListItems from "./ListItems";
import Footer from "./Footer";

function App() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("input");

  function handleAddItem(item) {
    setData(() => {
      return [...data, item];
    });
  }

  function deleteItem(id) {
    setData(() => {
      return data.filter((item) => item.id !== id);
    });
  }

  return (
    <>
      <Header />
      <Form onAddItem={handleAddItem} />
      <div className="flex-col">
        <ListItems
          data={data}
          setData={setData}
          onDeleteItem={deleteItem}
          order={order}
          setOrder={setOrder}
        />
        <Footer order={order} setOrder={setOrder} data={data} />
      </div>
    </>
  );
}

export default App;
