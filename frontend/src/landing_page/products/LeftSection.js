import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">

        {/* LEFT SIDE - HERO IMAGE */}
        <div className="col-6">
          <img
            src={imageURL}
            alt={productName}
            style={{
              width: "100%",
              maxWidth: "450px",
            }}
          />
        </div>

        {/* RIGHT SIDE - TEXT + CTA */}
        <div className="col-6">

          <h1>{productName}</h1>

          <p>{productDescription}</p>

          {/* CTA LINKS */}
          <div style={{ marginBottom: "15px" }}>
            <a
              href={tryDemo}
              style={{
                marginRight: "20px",
                textDecoration: "none",
                color: "#007bff",
                fontWeight: "500",
              }}
            >
              Try Demo →
            </a>

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

        </div>

      </div>
    </div>
  );
}

export default LeftSection;