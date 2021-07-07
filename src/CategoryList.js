import React, { useEffect, useState } from "react";
import "./App.css";
import RandomJoke from "./RandomJoke";
import { Modal, Button } from "react-bootstrap";

const CategoryList = () => {
  const [categories, setCategories] = useState();
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();

  useEffect(async () => {
    await fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => response.json())
      .then((categories) => setCategories(categories));
  });

  if (!categories) {
    return <p> Loading...</p>;
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const reload = () => setShow(false);

  const categoryList = categories.map((category) => (
    <li key={category}>
      <button
        className="list-el"
        type="button"
        value={category}
        onClick={(e) => {
          setSelected(e.target.value);
          handleShow();
        }}
      >
        {category}
      </button>
    </li>
  ));

  return (
    <div>
      <ul className="btn-list">{categoryList}</ul>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <RandomJoke category={selected} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-modal"
            variant="secondary"
            onClick={handleClose}
          >
            <i class="fas fa-arrow-left"></i>
          </Button>
          <Button className="btn-modal" variant="secondary" onClick={reload}>
            <i class="fas fa-arrow-left"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CategoryList;
