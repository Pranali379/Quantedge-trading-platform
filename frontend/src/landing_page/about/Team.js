import React from "react";
import nithinKamath from "../../images/nithinKamath.jpg";

function Team() {
  return (
    <div className="container">

      {/* Heading */}
      <div
  className="row p-5 mt-5 border-top justify-content-end"
>
  <div
    className="col-auto"
    style={{
      marginRight: "550px",
      marginTop: "100px",
    }}
  >
    <h1>People</h1>
  </div>
</div>

      {/* Content */}
      <div
        className="row p-5 align-items-center text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >

        {/* Left Side */}
        <div className="col-6 text-center">
          <img
            src={nithinKamath}
            alt="Nithin Kamath"
            style={{
              width: "50%",
              borderRadius: "50%",
            }}
          />

          <h4 className="mt-4 text-dark">Nithin Kamath</h4>
          <p>Founder, CEO</p>
        </div>

        {/* Right Side */}
        <div className="col-6 p-4"  style={{ marginTop: "-120px" }}>
          <p>
            Nithin bootstrapped and founded QuantEdge in 2010 to
            overcome the hurdles he faced during his decade long
            stint as a trader. Today, QuantEdge has changed the
            landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory
            Committee (SMAC) and the Market Data Advisory Committee
            (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a
              href="https://zerodha.com"
              style={{ textDecoration: "none" }}
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              href="https://tradingqna.com"
              style={{ textDecoration: "none" }}
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://twitter.com/Nithin0dha"
              style={{ textDecoration: "none" }}
            >
              Twitter
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Team;