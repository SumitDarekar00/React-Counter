import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import Routes and Route
import { useDispatch, useSelector } from "react-redux";
import { decrement, setToZero, increment } from "./counterSlice";
import Products from "./products";
import CustomNavbar from './CustomNavbar'; // Adjust the path if necessary

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.counterValue);
  return (
    <div>
      <CustomNavbar />
      <div className="App">
        <div>
          <Link to="/counter">
            <button style={buttonStyle}>Manage Counter</button>
          </Link>
          <Link to="/products">
            <button style={buttonStyle}>Manage Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Define button style object
const buttonStyle = {
  marginRight: "10px", // Add some right margin between buttons
  backgroundColor: "#4CAF50", // Green background color
  border: "none", // No border
  color: "white", // White text color
  padding: "10px 24px", // Padding
  textAlign: "center", // Center text
  textDecoration: "none", // Remove underline from link
  display: "inline-block", // Display as inline block
  fontSize: "16px", // Font size
  borderRadius: "8px", // Rounded corners
  cursor: "pointer", // Cursor style
};

export default App;
