import React, { useEffect, useState } from "react";
import "./App.css";

const RandomJoke = (props) => {
  const [state, setState] = useState();

  useEffect(async () => {
    generateAnother();
  }, [props.category]);

  const generateAnother = async () => {
    await fetch(
      `https://api.chucknorris.io/jokes/random?category=${props.category}`
    )
      .then((response) => response.json())
      .then((joke) => setState(joke.value));
  };

  return (
    <div className="card">
      <div className="card-header">Here is the {props.category} joke</div>
      <div className="card-body">
        <h4>{state}</h4>
      </div>
      <button className="btn-another" onClick={generateAnother}>
        Another one
      </button>
    </div>
  );
};

export default RandomJoke;
