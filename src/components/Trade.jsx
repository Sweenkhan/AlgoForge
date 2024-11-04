import React, { useState } from "react";
import axios from "axios";

function Trade() {
  const [symbol, setSymbol] = useState("");
  const [action, setAction] = useState("buy");
  const [quantity, setQuantity] = useState(1);

  const executeTrade = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/trade", {
        symbol,
        action,
        quantity,
      });
      alert(`Trade successful: ${response.data.status}`);
    } catch (error) {
      console.error("Error executing trade", error);
    }
  };

  return (
    <div>
      <h2>Trade</h2>
      <input type="text" placeholder="Symbol" onChange={(e) => setSymbol(e.target.value)} />
      <select onChange={(e) => setAction(e.target.value)}>
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
      </select>
      <input type="number" placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={executeTrade}>Execute Trade</button>
    </div>
  );
}

export default Trade;
