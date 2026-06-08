import React from "react";
import varsity from "../../images/varsity.png";

function Education() {
  return (
    <div
      className="container"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="row align-items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="col-lg-6 text-center">
          <img
            src={varsity}
            alt="Varsity"
            className="img-fluid"
            style={{
              width: "70%",
              maxWidth: "500px",
            }}
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="col-lg-6">

          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "500",
              color: "#424242",
              marginBottom: "30px",
            }}
          >
            Free and open market education
          </h1>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#666",
              marginBottom: "30px",
            }}
          >
            Varsity, the largest online stock market education book in
            the world covering everything from the basics to advanced
            trading.
          </p>

          <a
            href="/"
            style={{
              textDecoration: "none",
              fontSize: "1.1rem",
            }}
          >
            Varsity →
          </a>

          <br />
          <br />

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#666",
              marginBottom: "30px",
            }}
          >
            TradingQ&A, the most active trading and investment community
            in India for all your market related queries.
          </p>

          <a
            href="/"
            style={{
              textDecoration: "none",
              fontSize: "1.1rem",
            }}
          >
            TradingQ&A →
          </a>

        </div>

      </div>
    </div>
  );
}

export default Education;