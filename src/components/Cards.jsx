import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Cards.css";

const pizzasList = [
  {
    id: 0,
    title: "Pizza 1",
    url: "https://pruebaspaginas.s3.amazonaws.com/recursos-prueba-tecnica/pizza.jpg",
  },
  {
    id: 1,
    title: "Pizza 2",
    url: "https://pruebaspaginas.s3.amazonaws.com/recursos-prueba-tecnica/pizza.jpg",
  },
  {
    id: 2,
    title: "Pizza 3",
    url: "https://pruebaspaginas.s3.amazonaws.com/recursos-prueba-tecnica/pizza.jpg",
  },
  {
    id: 3,
    title: "Pizza 4",
    url: "https://pruebaspaginas.s3.amazonaws.com/recursos-prueba-tecnica/pizza.jpg",
  },
];

const Cards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {pizzasList.map((pizza) => (
          <div
            key={pizza.id}
            className="col-lg-6 mt-3 d-flex justify-content-center"
          >
            <div className="card mb-3 flex-row align-items-center">
              <div className="col-6">
                <img
                  src={pizza.url}
                  className="img-fluid rounded-start"
                  alt={`Pizza ${pizza.id}`}
                />
              </div>
              <div className="col-6">
                <div className="card-body">
                  <h5 className="card-title text-center">{pizza.title}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
