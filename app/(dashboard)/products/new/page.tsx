/*
"use client";
import React, { useState } from "react";

interface ProductsFormProps {
  onSubmit: (productData: {
    name: string;
    description: string;
    price: number;
    quantity: number;
  }) => void;
}

const ProductsForm: React.FC<ProductsFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, price, quantity }); // Pass the data on submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Product Description"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Product Price"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        placeholder="Product Quantity"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductsForm;
*/
