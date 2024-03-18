"use client";
import { useReducer } from "react";
import { counterReducer } from "../Context/ReducerFunction";

export default function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h2 className="m-3">Counter</h2>
      <p className="m-3">Count: {count}</p>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="m-3 rounded border-double border-4 border-black p-2 hover:border-dotted"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="m-3 rounded border-double border-4 border-black p-2 hover:border-dotted"
      >
        Decrement
      </button>
    </div>
  );
}
