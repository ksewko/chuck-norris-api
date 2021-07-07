import React, { useEffect, useState } from "react";
import "./App.css";

const RandomJoke = (props) => {
  const [state, setState] = useState();

  useEffect(async () => {
    await fetch(
      `https://api.chucknorris.io/jokes/random?category=${props.category}`
    )
      .then((response) => response.json())
      .then((joke) => setState(joke.value));
  }, [props.category]);

  return (
    <div className="card">
      <div className="card-header">Here is the {props.category} joke</div>
      <div className="card-body">
        <h4>{state}</h4>
      </div>
    </div>
  );
};

export default RandomJoke;
