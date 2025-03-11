import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$59.99",
    image: "https://via.placeholder.com/200x150?text=Headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$99.99",
    image: "https://via.placeholder.com/200x150?text=Smart+Watch",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$39.99",
    image: "https://via.placeholder.com/200x150?text=Gaming+Mouse",
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: "$29.99",
    image: "https://via.placeholder.com/200x150?text=Laptop+Stand",
  },
];

function Store() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 col-sm-6 mb-4">
            <div className="card text-center">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
