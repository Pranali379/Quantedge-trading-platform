import React from "react";
import largestBroker from "../../images/largestBroker.png";
import pressLogos from "../../images/pressLogos.png";

function Awards() {
  return (
    <div
      className="container"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="row align-items-center">

        {/* LEFT IMAGE */}
        <div className="col-lg-6 col-md-6 text-center">
          <img
            src={largestBroker}
            alt="Largest Broker"
            className="img-fluid"
            style={{
              maxWidth: "85%",
              width: "400px",
              marginLeft: "0px",
            }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="col-lg-6 col-md-6">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "500",
              marginBottom: "25px",
            }}
          >
            Largest stock broker in India
          </h1>

          <p
            className="text-muted"
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
            }}
          >
            2+ million QuantEdge clients contribute to over 15%
            of all retail order volumes in India daily by
            trading and investing in:
          </p>

          <div className="row mt-4">
            <div className="col-6">
              <p>• Futures and Options</p>
              <p>• Commodity derivatives</p>
              <p>• Currency derivatives</p>
            </div>

            <div className="col-6">
              <p>• Stocks & IPOs</p>
              <p>• Direct mutual funds</p>
              <p>• Bonds and Govt. securities</p>
            </div>
          </div>
          <img 
          src={pressLogos}
          alt="Press Logos"
          className="img-fluid mt-4"
          style={{ width: "90%" }}/>

        </div>

      </div>
    </div>
  );
}

export default Awards;