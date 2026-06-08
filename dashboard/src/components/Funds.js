import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Funds = () => {
const [balance, setBalance] = useState(0);

const addFunds = async () => {
  const amount = prompt("Enter amount");

  if (!amount) return;

  const res = await axios.post(
    "http://localhost:8080/addFunds",
    {
      amount,
    }
  );

  setBalance(res.data.balance);
};

const withdrawFunds = async () => {
  const amount = prompt("Enter amount");

  if (!amount) return;

  try {
    const res = await axios.post(
      "http://localhost:8080/withdrawFunds",
      {
        amount,
      }
    );

    setBalance(res.data.balance);
  } catch {
    alert("Insufficient balance");
  }
};

useEffect(() => {
  fetchFunds();
}, []);

const fetchFunds = async () => {
  const res = await axios.get(
    "http://localhost:8080/funds"
  );

  setBalance(res.data.balance);
};


  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <button
  className="btn btn-green"
  onClick={addFunds}
>
  Add Funds
</button>

<button
  className="btn btn-blue"
  onClick={withdrawFunds}
>
  Withdraw
</button>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
             <p className="imp colored"> ₹ {balance.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
