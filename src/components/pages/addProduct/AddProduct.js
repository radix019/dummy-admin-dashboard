import React, { useContext, useState } from "react";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";

import uuid from "react-uuid";
import { ProductContext } from "../../context/Product";
import { PAGES } from "../../global/constants";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: uuid(),
      title: name,
      price,
    };
    addProduct(newProduct);
    setName("");
    setPrice("");
    navigate(`/${PAGES.PRODUCT_LIST}`);
  };

  return (
    <div className="add-product-form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
