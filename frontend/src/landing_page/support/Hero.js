import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundColor: "#387ed1",
        paddingTop: "70px",
        paddingBottom: "70px",
        color: "white",
      }}
    >
      <div className="container">

        <div className="row">

          <div className="col-8">

            <h1
              style={{
                fontSize: "42px",
                fontWeight: "500",
                marginBottom: "20px",
              }}
            >
              Support Portal
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                opacity: "0.95",
              }}
            >
              Search for an answer or browse help topics to create a ticket.
            </p>

            {/* SEARCH BOX */}
            <input
              type="text"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
              style={{
                width: "100%",
                maxWidth: "700px",
                padding: "18px 20px",
                borderRadius: "4px",
                border: "none",
                marginTop: "25px",
                fontSize: "16px",
                outline: "none",
              }}
            />

          </div>

          {/* RIGHT SIDE */}
          <div className="col-4 text-end">

            <p
              style={{
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              Track tickets
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                alignItems: "flex-end",
              }}
            >

              <a
                href="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
              >
                Track account opening
              </a>

              <a
                href="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
              >
                Track segment activation
              </a>

              <a
                href="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
              >
                Intraday margins
              </a>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Hero;