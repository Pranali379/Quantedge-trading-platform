import React from "react";

import appStore from "../../images/appStore.png";
import googlePlay from "../../images/googlePlay.png";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">

        {/* LEFT SIDE - TEXT */}
        <div className="col-6">

          <h1>{productName}</h1>

          <p>{productDescription}</p>

          {/* LEARN MORE */}
          <div style={{ marginBottom: "15px" }}>
            <a
              href={learnMore}
              style={{
                textDecoration: "none",
                color: "#007bff",
                fontWeight: "500",
              }}
            >
              Learn More →
            </a>
          </div>

          {/* LIGHT DIVIDER */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(0,0,0,0.12)",
              margin: "15px 0",
            }}
          />

          {/* APP STORE BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              src={appStore}
              alt="App Store"
              style={{ width: "150px", cursor: "pointer" }}
            />

            <img
              src={googlePlay}
              alt="Google Play"
              style={{ width: "150px", cursor: "pointer" }}
            />
          </div>

        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="col-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            style={{
              width: "100%",
              maxWidth: "450px",
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;