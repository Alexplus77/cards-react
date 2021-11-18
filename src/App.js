import "App.css";
import React from "react";
import Cart from "./components/Cart";
function App() {
  return (
    <div>
      <Cart>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <img
          src={"https://ic.wampi.ru/2021/11/18/leo.md.jpg"}
          className="card-img-top"
          alt="Arina"
        />
      </Cart>
      <Cart>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </Cart>
    </div>
  );
}

export default App;
