import React from "react";
import "./App.css";
import chuck from "./chuck.png";
import CategoryList from "./CategoryList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img src={chuck} alt="picture of Chuck Norris"></img>
        </div>
        <div className="col-12 ">
          <div className="title">Chuck Norris API</div>
          <p className="instruction">
            Press category button to generate random joke!
          </p>
        </div>

        <div className="col-12 jokes-section">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}

export default App;
