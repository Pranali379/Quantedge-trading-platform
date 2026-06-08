import React from 'react';


function Hero() {
    return (
        <div 
            className="container mt-5"
            style={{ textAlign: "center" }}
        >

            <h1 style={{ marginTop: "50px" }}>
                Open a QuantEdge account
            </h1>

            <p 
                style={{
                    marginTop: "20px",
                    color: "gray"
                }}
            >
               Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
            </p>

            <button 
                className="p-2 btn btn-primary fs-5"
                style={{
                    marginTop: "20px",
                    padding: "10px 25px",
                    backgroundColor: "#387ed1",
                    color: "white",
                }}
            >
                Signup for free
            </button>

        </div>
    );
}

export default Hero;