import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "./productsSlice";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4 from uuid

const Products = () => {
  const products = useSelector((state) => state.products.productsList);
  const dispatch = useDispatch();
  const [newProductName, setNewProductName] = useState("");
  const [idCounter, setIdCounter] = useState(1); // Initialize counter to 1

  const handleAddProduct = () => {
    const newProduct = {
      id: idCounter, // Use idCounter as the numeric ID
      name: newProductName
    };
    dispatch(addProduct(newProduct));
    setNewProductName(""); // Clear input after adding
    setIdCounter(idCounter + 1); // Increment the counter
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1 style={{ color: "blue" }}>Manage Products</h1>
      <input
        type="text"
        value={newProductName}
        onChange={(e) => setNewProductName(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button
        onClick={handleAddProduct}
        style={{ backgroundColor: "green", color: "white", padding: "5px", border: "none", cursor: "pointer" }}
      >
        Add Product
      </button>
      <table style={{ borderCollapse: "collapse", marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid black", padding: "10px" }}>Product ID</th>
            <th style={{ borderBottom: "1px solid black", padding: "10px" }}>Product Name</th>
            <th style={{ borderBottom: "1px solid black", padding: "10px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td style={{ borderBottom: "1px solid black", padding: "10px" }}>{index + 1}</td>
              <td style={{ borderBottom: "1px solid black", padding: "10px" }}>{product.name}</td>
              <td style={{ borderBottom: "1px solid black", padding: "10px" }}>
                <button onClick={() => handleDeleteProduct(product.id)} style={{ backgroundColor: "red", color: "white", padding: "5px", border: "none", cursor: "pointer" }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
