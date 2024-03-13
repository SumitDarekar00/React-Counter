import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, setToZero } from "./counterSlice"; 

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.counterValue);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleSetToZero = () => {
    dispatch(setToZero());
  };

  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{color: "blue"}}>Perform Increment / Decrement Operations on the Counter</h1>
      <h2 style={{color: "green"}}>Counter</h2>
      <p style={{fontSize: "18px", color: "red"}}>Counter Value: {count}</p>
      <button style={{marginRight: "10px", backgroundColor: "yellow", color: "black"}} onClick={handleIncrement}>Increment +</button>
      <button style={{marginRight: "10px", backgroundColor: "orange", color: "black"}} onClick={handleSetToZero}>Set To Zero</button>
      <button style={{backgroundColor: "red", color: "white"}} onClick={handleDecrement}>Decrement -</button>
    </div>
  );
};

export default Counter;
