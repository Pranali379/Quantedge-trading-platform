import React from "react";
import ecosystem from "../../images/ecosystem.png";

function Stats() {
  return (
    <div
      className="container"
      style={{
        paddingTop: "30px",
        paddingBottom: "100px",
      }}
    >
      <div className="row align-items-center">

        {/* LEFT TEXT SECTION */}
        <div className="col-lg-5">

              {/* MAIN HEADING */}
  <h2
    style={{
      fontSize: "2.8rem",
      fontWeight: "500",
      marginBottom: "40px",
      marginTop: "60px",
      color: "#424242",
    }}
  >
    Trust with confidence
  </h2>

          <h2
            style={{
              fontSize: "1.7rem",
              marginBottom: "12px",
              fontWeight: "500",
              color: "#424242",
            }}
          >
            Customer-first always
          </h2>

          <p
            style={{
              lineHeight: "1.7",
              fontSize: "1rem",
              color: "#666",
              marginBottom: "45px",
            }}
          >
            That's why 1.6+ crore customers trust QuantEdge with
            ~ ₹6 lakh crores of equity investments, making us India's
            largest broker; contributing to 15% of daily retail
            exchange volumes in India.
          </p>

          <h2
            style={{
              fontSize: "1.7rem",
              marginBottom: "12px",
              fontWeight: "500",
              color: "#424242",
            }}
          >
            No spam or gimmicks
          </h2>

          <p
            style={{
              lineHeight: "1.7",
              fontSize: "1rem",
              color: "#666",
              marginBottom: "45px",
            }}
          >
            No gimmicks, spam, "gamification", or annoying push
            notifications. High quality apps that you use at your
            pace, the way you like.
          </p>

          <h2
            style={{
              fontSize: "1.7rem",
              marginBottom: "12px",
              fontWeight: "500",
              color: "#424242",
            }}
          >
            The QuantEdge universe
          </h2>

          <p
            style={{
              lineHeight: "1.7",
              fontSize: "1rem",
              color: "#666",
              marginBottom: "45px",
            }}
          >
            Not just an app, but a whole ecosystem. Our investments
            in 30+ fintech startups offer you tailored services
            specific to your needs.
          </p>

          <h2
            style={{
              fontSize: "1.7rem",
              marginBottom: "12px",
              fontWeight: "500",
              color: "#424242",
            }}
          >
            Do better with money
          </h2>

          <p
            style={{
              lineHeight: "1.7",
              fontSize: "1rem",
              color: "#666",
            }}
          >
            With initiatives like Nudge and Kill Switch,
            we don't just facilitate transactions, but
            actively help you do better with your money.
          </p>

        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="col-lg-7 text-center">

          <img
            src={ecosystem}
            alt="Ecosystem"
            className="img-fluid"
            style={{
              width: "85%",
              maxWidth: "650px",
              marginLeft: "20px",
            }}
          />

          {/* LINKS BELOW IMAGE */}
          <div
            style={{
              marginTop: "35px",
              display: "flex",
              justifyContent: "center",
              gap: "50px",
              fontSize: "1.2rem",
            }}
          >
            <a
              href="/"
              style={{
                textDecoration: "none",
              }}
            >
              Explore our products →
            </a>

            <a
              href="/"
              style={{
                textDecoration: "none",
              }}
            >
              Try Kite demo →
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Stats;