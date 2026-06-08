import React from "react";

// Images
import pricing0 from "../../images/pricing0.png";
import intradayTrades from "../../images/intradayTrades.png";
import pricingMF from "../../images/pricingMF.png";

function Hero() {
  return (
    <div className="container">

      {/* TOP SECTION */}
      <div className="row p-5 mt-5 border-bottom text-center">

        <h1
          style={{
            fontSize: "42px",
            color: "#424242",
            fontWeight: "500",
          }}
        >
          Pricing
        </h1>

        <h3
          className="text-muted mt-3"
          style={{
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>

      </div>

      {/* CARDS SECTION */}
      <div
        className="row text-center"
        style={{
          padding: "90px 0 70px",
        }}
      >

        {/* CARD 1 */}
        <div className="col-4 px-5">

          <img
            src={pricing0}
            alt="Free Equity"
            style={{
              width: "58%",
              marginBottom: "35px",
              marginTop: "10px",
            }}
          />

          <h2
            style={{
              fontSize: "28px",
              color: "#424242",
              marginBottom: "18px",
              fontWeight: "500",
            }}
          >
            Free equity delivery
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "16px",
              lineHeight: "1.8",
              fontWeight: "400",
            }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free —
            ₹ 0 brokerage.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="col-4 px-5">

          <img
            src={intradayTrades}
            alt="Intraday Trades"
            style={{
              width: "70%",
              marginBottom: "28px",
              marginTop: "28px",
            }}
          />

          <h2
            style={{
              fontSize: "28px",
              color: "#424242",
              marginBottom: "18px",
              fontWeight: "500",
            }}
          >
            Intraday and F&O trades
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "16px",
              lineHeight: "1.8",
              fontWeight: "400",
            }}
          >
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
            Flat ₹20 on all option trades.
          </p>

        </div>

        {/* CARD 3 */}
        <div className="col-4 px-5">

          <img
            src={pricingMF}
            alt="Direct Mutual Funds"
            style={{
              width: "58%",
              marginBottom: "35px",
              marginTop: "10px",
            }}
          />

          <h2
            style={{
              fontSize: "28px",
              color: "#424242",
              marginBottom: "18px",
              fontWeight: "500",
            }}
          >
            Free direct MF
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "16px",
              lineHeight: "1.8",
              fontWeight: "400",
            }}
          >
            All direct mutual fund investments are absolutely free —
            ₹ 0 commissions & DP charges.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Hero;