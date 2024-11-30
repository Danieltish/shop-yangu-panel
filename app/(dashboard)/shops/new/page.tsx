// ShopForm.tsx
"use client";
import React, { useState } from "react";

interface ShopFormProps {
  onSubmit: (shopData: { name: string; description: string }) => void;
}

const ShopForm: React.FC<ShopFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description }); // Only pass name and description
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Shop Name"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Shop Description"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ShopForm;
