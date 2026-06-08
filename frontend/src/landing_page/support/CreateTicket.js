import React from "react";

function CreateTicket() {
  const linkStyle = {
    display: "block",
    textDecoration: "none",
    color: "#387ed1",
    marginTop: "12px",
    fontSize: "16px",
    lineHeight: "2.5",
  };

  return (
    <div className="container">

      <div className="row p-5 mt-5 mb-5">

        <h1 className="fs-2 mb-5">
          To create a ticket, select a relevant topic.
        </h1>

        <div className="col-4 p-5 mt-2 mb-2">

          <h4 className="mb-4" style={{ color: "#424242" }}>
            <i className="fa-solid fa-circle-plus"></i>{" "}
            Account Opening
          </h4>

          <a href="/" style={linkStyle}>
            Online Account Opening
          </a>

          <a href="/" style={linkStyle}>
            Offline Account Opening
          </a>

          <a href="/" style={linkStyle}>
            Company, Partnership and HUF Account Opening
          </a>

          <a href="/" style={linkStyle}>
            NRI Account Opening
          </a>

          <a href="/" style={linkStyle}>
            Charges at QuantEdge
          </a>

          <a href="/" style={linkStyle}>
            QuantEdge IDFC FIRST Bank 3-in-1 Account
          </a>

          <a href="/" style={linkStyle}>
            Getting Started
          </a>

        </div>

        <div className="col-4 p-5 mt-2 mb-2">

          <h4 className="mb-4" style={{ color: "#424242" }}>
            <i className="fa-solid fa-user"></i>{" "}
            Your QuantEdge Account
          </h4>

          <a href="/" style={linkStyle}>
            Login Credentials
          </a>

          <a href="/" style={linkStyle}>
            Account Modification and Segment Addition
          </a>

          <a href="/" style={linkStyle}>
            DP ID and bank details
          </a>

          <a href="/" style={linkStyle}>
            Your Profile
          </a>

          <a href="/" style={linkStyle}>
            Transfer and conversion of shares
          </a>

        </div>

        <div className="col-4 p-5 mt-2 mb-2">

          <h4 className="mb-4" style={{ color: "#424242" }}>
            <i className="fa-solid fa-chart-column"></i>{" "}
            Your QuantEdge Account
          </h4>

          <a href="/" style={linkStyle}>
            Margin/leverage, Product and Order types
          </a>

          <a href="/" style={linkStyle}>
            Kite Web and Mobile
          </a>

          <a href="/" style={linkStyle}>
            Trading FAQs
          </a>

          <a href="/" style={linkStyle}>
            Corporate Actions
          </a>

          <a href="/" style={linkStyle}>
            Sentinel
          </a>

          <a href="/" style={linkStyle}>
            Kite API
          </a>

          <a href="/" style={linkStyle}>
            Pi and other platforms
          </a>

          <a href="/" style={linkStyle}>
            Stockreport+
          </a>

          <a href="/" style={linkStyle}>
            GTT
          </a>

        </div>

        <div className="col-4 p-5 mt-2 mb-2">

          <h4 className="mb-4" style={{ color: "#424242" }}>
            <i class="fa-solid fa-money-bills"></i>{" "}
            Funds
          </h4>

          <a href="/" style={linkStyle}>
            Adding Funds
          </a>

          <a href="/" style={linkStyle}>
            Fund Withdrawal
          </a>

          <a href="/" style={linkStyle}>
            eMandates
          </a>

          <a href="/" style={linkStyle}>
            Adding Bank Account 
          </a>

        </div>

        <div className="col-4 p-5 mt-2 mb-2">

          <h4 className="mb-4" style={{ color: "#424242" }}>
            <i class="fa-solid fa-circle-notch"></i>{" "}
            Console
          </h4>

          <a href="/" style={linkStyle}>
            Reports
          </a>

          <a href="/" style={linkStyle}>
            Ledger
          </a>

          <a href="/" style={linkStyle}>
            Portfolio
          </a>

          <a href="/" style={linkStyle}>
            60 Day Challenge
          </a>

          <a href="/" style={linkStyle}>
            IPO
          </a>

        </div>

        <div className="col-4 p-5 mt-2 mb-2">

          <h4 className="mb-4" style={{ color: "#424242" }}>
            <i class="fa-regular fa-circle"></i>{" "}
            Coin
          </h4>

          <a href="/" style={linkStyle}>
            Understanding Mutual Funds
          </a>

          <a href="/" style={linkStyle}>
           About Coin
          </a>

          <a href="/" style={linkStyle}>
            Buying and selling coin
          </a>

          <a href="/" style={linkStyle}>
           Staring an SIP
          </a>

          <a href="/" style={linkStyle}>
           Managing your Portfolio
          </a>

          <a href="/" style={linkStyle}>
           Coin App
          </a>

          <a href="/" style={linkStyle}>
            Moving to Coin
          </a>

          <a href="/" style={linkStyle}>
            Government Schemes
          </a>


        </div>

      </div>

    </div>
  );
}

export default CreateTicket;