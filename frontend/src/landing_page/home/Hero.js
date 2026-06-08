import React from 'react';
import homeHero from '../../images/homeHero.png';

function Hero() {
    return (
        <div 
            className="container mt-5"
            style={{ textAlign: "center" }}
        >

            <img
                src={homeHero}
                alt="Hero"
                className="img-fluid"
                style={{
                    maxHeight: "400px",
                    width: "70%"
                }}
            />

            <h1 style={{ marginTop: "50px" }}>
                Invest in everything
            </h1>

            <p 
                style={{
                    marginTop: "20px",
                    color: "gray"
                }}
            >
                Online platform to invest in stocks,
                derivatives, mutual funds, and more
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
                Signup now
            </button>

        </div>
    );
}

export default Hero;