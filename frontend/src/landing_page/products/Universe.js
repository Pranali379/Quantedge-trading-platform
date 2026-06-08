import React from "react";

// Images
import zerodhaFundhouse from "../../images/zerodhaFundhouse.png";
import sensibull from "../../images/sensibullLogo.svg";
import tijori from "../../images/tijori3.png";
import streak from "../../images/streakLogo.png";
import smallcase from "../../images/smallcaseLogo.png";
import ditto from "../../images/dittoLogo.png";

function Universe() {
  const partners = [
    {
      image: zerodhaFundhouse,
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: sensibull,
      description:
        "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      image: tijori,
      description:
        "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      image: streak,
      description:
        "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      image: smallcase,
      description:
        "Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.",
    },
    {
      image: ditto,
      description:
        "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <div
      className="container text-center"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >

      {/* HEADING */}
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "500",
          color: "#424242",
          marginBottom: "22px",
        }}
      >
        The QuantEdge Universe
      </h1>

      {/* SUBTEXT */}
      <p
        style={{
          fontSize: "20px",
          color: "#666",
          marginBottom: "90px",
          lineHeight: "1.7",
        }}
      >
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      {/* GRID */}
      <div className="row">

        {partners.map((item, index) => (
          <div
            key={index}
            className="col-4"
            style={{
              marginBottom: "90px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >

            {/* LOGO */}
           <img
  src={item.image}
  alt="partner"
  style={{
    width: "70%",
    maxWidth: "240px",
    marginBottom: "28px",
    transform: item.image === tijori ? "translateY(-12px)" : "none",
  }}
/>

            {/* DESCRIPTION */}
            <p
              style={{
                color: "#9b9b9b",
                fontSize: "16px",
                lineHeight: "1.8",
                fontWeight: "400",
              }}
            >
              {item.description}
            </p>

          </div>
        ))}

      </div>

      {/* BUTTON */}
      <button
        style={{
          backgroundColor: "#387ed1",
          color: "white",
          border: "none",
          padding: "14px 34px",
          fontSize: "20px",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "500",
          marginTop: "10px",
        }}
      >
        Sign up for free
      </button>

    </div>
  );
}

export default Universe;