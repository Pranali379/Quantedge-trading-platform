import React from "react";
import Hero from "./Hero";
import Universe from "./Universe";

// Images
import kiteImg from "../../images/kite.png";
import consoleImg from "../../images/console.png";
import coinImg from "../../images/coin.png";
import kiteConnectImg from "../../images/kiteconnect.png";
import varsityImg from "../../images/varsity.png";

import appStore from "../../images/appStore.png";
import googlePlay from "../../images/googlePlay.png";

function ProductPage() {
  const products = [
    {
      image: kiteImg,
      name: "Kite",
      description:
        "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
      type: "kite",
    },
    {
      image: consoleImg,
      name: "Console",
      description:
        "The central dashboard for your QuantEdge account. Gain insights into your trades and investments with in-depth reports and visualisations.",
      type: "console",
    },
    {
      image: coinImg,
      name: "Coin",
      description:
        "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
      type: "coin",
    },
    {
      image: kiteConnectImg,
      name: "Kite Connect API",
      description:
        "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
      type: "kiteconnect",
    },
    {
      image: varsityImg,
      name: "Varsity Mobile",
      description:
        "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
      type: "varsity",
    },
  ];

  const btnStyle = {
    background: "none",
    border: "none",
    padding: 0,
    color: "#007bff",
    cursor: "pointer",
    fontWeight: "500",
  };

  return (
    <>
      <Hero />

      {products.map((item, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div key={index} className="container" style={{ padding: "80px 0" }}>
            <div className="row align-items-center">

              {/* IMAGE */}
              <div
                className="col-6"
                style={{
                  order: isReversed ? 2 : 1,
                  textAlign: "center",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", maxWidth: "480px" }}
                />
              </div>

              {/* TEXT */}
              <div
                className="col-6"
                style={{
                  order: isReversed ? 1 : 2,
                }}
              >
                <h1 style={{ fontSize: "36px", marginBottom: "12px" }}>
                  {item.name}
                </h1>

                <p
                  style={{
                    fontSize: "17px",
                    color: "#555",
                    lineHeight: "1.7",
                  }}
                >
                  {item.description}
                </p>

                <div style={{ marginTop: "18px" }}>

                  {/* KITE */}
                  {item.type === "kite" && (
                    <>
                      <button style={{ ...btnStyle, marginRight: "20px" }}>
                        Try Demo →
                      </button>
                      <button style={btnStyle}>Learn More →</button>
                    </>
                  )}

                  {/* CONSOLE */}
                  {item.type === "console" && (
                    <button style={btnStyle}>Console →</button>
                  )}

                  {/* COIN ✔ UPDATED */}
                  {item.type === "coin" && (
                    <div style={{ display: "flex", gap: "15px" }}>
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
                  )}

                  {/* KITE CONNECT */}
                  {item.type === "kiteconnect" && (
                    <button style={btnStyle}>Kite Connect →</button>
                  )}

                  {/* VARSITY */}
                  {item.type === "varsity" && (
                    <div style={{ display: "flex", gap: "15px" }}>
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
                  )}

                </div>
              </div>

            </div>
          </div>
        );
           })}

      {/* UNIVERSE SECTION */}
      <Universe />

    </>
  );
} 

export default ProductPage;