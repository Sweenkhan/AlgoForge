import React, { useState } from "react";
import axios from "axios";

function Backtest() {
  const [symbol, setSymbol] = useState("");
  const [data, setData] = useState([]);


//   https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=<Your-API-Key-Here>&redirect_uri=<Your-Redirect-URI-Here>&state=<Your-Optional-State-Parameter-Here>
  const fetchHistoricalData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/historical-data", {
        params: { symbol },
      });
      setData(response.data);
      runBacktest(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const runBacktest = (historicalData) => {
    let signals = [];
    for (let i = 20; i < historicalData.length; i++) {
      let shortAvg = historicalData.slice(i - 10, i).reduce((a, b) => a + b.close, 0) / 10;
      let longAvg = historicalData.slice(i - 20, i).reduce((a, b) => a + b.close, 0) / 20;

      if (shortAvg > longAvg) {
        signals.push({ date: historicalData[i].date, signal: "BUY" });
      } else if (shortAvg < longAvg) {
        signals.push({ date: historicalData[i].date, signal: "SELL" });
      }
    }
    console.log("Backtest Signals:", signals);
  };

  return (
    <div>
      <h2>Backtest</h2>
      <input type="text" placeholder="Symbol" onChange={(e) => setSymbol(e.target.value)} />
      <button onClick={fetchHistoricalData}>Run Backtest</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{`Date: ${item.date}, Close: ${item.close}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Backtest;
