import React from "react";

function Brokerage() {
  return (
    <div className="container" style={{ paddingTop: "70px" }}>

      {/* TOP NAVIGATION */}
      <div
        style={{
          display: "flex",
          gap: "60px",
          borderBottom: "1px solid #ddd",
          paddingBottom: "18px",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            color: "#424242",
            fontSize: "30px",
            fontWeight: "500",
            borderBottom: "3px solid #387ed1",
            paddingBottom: "18px",
            marginBottom: "-19px",
            cursor: "pointer",
          }}
        >
          Equity
        </h2>

        <h2
          style={{
            color: "#387ed1",
            fontSize: "30px",
            fontWeight: "400",
            cursor: "pointer",
          }}
        >
          Currency
        </h2>

        <h2
          style={{
            color: "#387ed1",
            fontSize: "30px",
            fontWeight: "400",
            cursor: "pointer",
          }}
        >
          Commodity
        </h2>
      </div>

      {/* MAIN TABLE */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "4px",
          overflow: "hidden",
          marginBottom: "80px",
        }}
      >

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead style={{ backgroundColor: "#fafafa" }}>
            <tr>
              <th style={headStyle}></th>
              <th style={headStyle}>Equity delivery</th>
              <th style={headStyle}>Equity intraday</th>
              <th style={headStyle}>F&O - Futures</th>
              <th style={headStyle}>F&O - Options</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td style={leftStyle}>Brokerage</td>

              <td style={cellStyle}>Zero Brokerage</td>

              <td style={cellStyle}>
                0.03% or Rs. 20/executed order whichever is lower
              </td>

              <td style={cellStyle}>
                0.03% or Rs. 20/executed order whichever is lower
              </td>

              <td style={cellStyle}>
                Flat Rs. 20 per executed order
              </td>
            </tr>

            <tr>
              <td style={leftStyle}>STT/CTT</td>

              <td style={cellStyle}>0.1% on buy & sell</td>

              <td style={cellStyle}>0.025% on the sell side</td>

              <td style={cellStyle}>0.05% on the sell side</td>

              <td style={cellStyle}>
                • 0.125% on exercised options
                <br />
                • 0.1% on sell side
              </td>
            </tr>

            <tr>
              <td style={leftStyle}>Transaction charges</td>

              <td style={cellStyle}>
                NSE: 0.00322%
                <br />
                BSE: 0.00375%
              </td>

              <td style={cellStyle}>
                NSE: 0.00322%
                <br />
                BSE: 0.00375%
              </td>

              <td style={cellStyle}>
                NSE: 0.0019%
                <br />
                BSE: 0
              </td>

              <td style={cellStyle}>
                NSE: 0.03503%
                <br />
                BSE: 0.0325%
              </td>
            </tr>

            <tr>
              <td style={leftStyle}>GST</td>

              <td style={cellStyle}>18% on all charges</td>

              <td style={cellStyle}>18% on all charges</td>

              <td style={cellStyle}>18% on all charges</td>

              <td style={cellStyle}>18% on all charges</td>
            </tr>

            <tr>
              <td style={leftStyle}>SEBI charges</td>

              <td style={cellStyle}>₹10 / crore</td>

              <td style={cellStyle}>₹10 / crore</td>

              <td style={cellStyle}>₹10 / crore</td>

              <td style={cellStyle}>₹10 / crore</td>
            </tr>

            <tr>
              <td style={leftStyle}>Stamp charges</td>

              <td style={cellStyle}>
                0.015% or ₹1500 / crore
              </td>

              <td style={cellStyle}>
                0.003% or ₹300 / crore
              </td>

              <td style={cellStyle}>
                0.002% or ₹200 / crore
              </td>

              <td style={cellStyle}>
                0.003% or ₹300 / crore
              </td>
            </tr>

            <tr>
              <td style={leftStyle}>Call & trade</td>

              <td style={cellStyle}>₹50 per order</td>

              <td style={cellStyle}>₹50 per order</td>

              <td style={cellStyle}>₹50 per order</td>

              <td style={cellStyle}>₹50 per order</td>
            </tr>

            <tr>
              <td style={leftStyle}>DP charges</td>

              <td style={cellStyle}>₹15.34 per scrip</td>

              <td style={cellStyle}>Nil</td>

              <td style={cellStyle}>Nil</td>

              <td style={cellStyle}>Nil</td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* CHARGES EXPLAINED */}
      <div style={{ marginBottom: "100px" }}>

        <h2
          style={{
            fontSize: "28px",
            color: "#424242",
            marginBottom: "25px",
            fontWeight: "500",
          }}
        >
          Charges explained
        </h2>

        <div className="row">

          <div className="col-6">
            <p style={bottomText}>
              <strong>Securities transaction tax</strong>
            </p>

            <p style={bottomText}>
              Tax charged by the government when trading.
            </p>

            <p style={bottomText}>
              <strong>Transaction Charges</strong>
            </p>

            <p style={bottomText}>
              Charged by stock exchanges on trades.
            </p>

            <p style={bottomText}>
              <strong>GST</strong>
            </p>

            <p style={bottomText}>
              Government tax on brokerage and services.
            </p>
          </div>

          <div className="col-6">
            <p style={bottomText}>
              <strong>SEBI Charges</strong>
            </p>

            <p style={bottomText}>
              Charged by market regulator SEBI.
            </p>

            <p style={bottomText}>
              <strong>Stamp Charges</strong>
            </p>

            <p style={bottomText}>
              State government tax on buy transactions.
            </p>

            <p style={bottomText}>
              <strong>DP Charges</strong>
            </p>

            <p style={bottomText}>
              Charged while selling stocks from Demat account.
            </p>
          </div>

        </div>
      </div>

      {/* ACCOUNT OPENING */}
      <div style={{ marginBottom: "70px" }}>

        <h2 style={sectionTitle}>
          Charges for account opening
        </h2>

        <div style={tableContainer}>
          <table style={tableStyle}>

            <thead style={{ backgroundColor: "#fafafa" }}>
              <tr>
                <th style={headStyle}>Type of account</th>
                <th style={headStyle}>Charges</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td style={leftStyle}>Online account</td>
                <td style={cellStyle}>Free</td>
              </tr>

              <tr>
                <td style={leftStyle}>Offline account</td>
                <td style={cellStyle}>₹200</td>
              </tr>

              <tr>
                <td style={leftStyle}>NRI account</td>
                <td style={cellStyle}>₹500</td>
              </tr>

            </tbody>

          </table>
        </div>
      </div>

      {/* DEMAT AMC */}
      <div style={{ marginBottom: "70px" }}>

        <h2 style={sectionTitle}>
          Demat AMC (Annual Maintenance Charges)
        </h2>

        <div style={tableContainer}>
          <table style={tableStyle}>

            <thead style={{ backgroundColor: "#fafafa" }}>
              <tr>
                <th style={headStyle}>Account type</th>
                <th style={headStyle}>Charges</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td style={leftStyle}>Basic Services Demat Account</td>
                <td style={cellStyle}>Free</td>
              </tr>

              <tr>
                <td style={leftStyle}>Regular Demat Account</td>
                <td style={cellStyle}>₹300 + GST yearly</td>
              </tr>

            </tbody>

          </table>
        </div>
      </div>

      {/* VALUE ADDED SERVICES */}
      <div style={{ marginBottom: "100px" }}>

        <h2 style={sectionTitle}>
          Charges for optional value added services
        </h2>

        <div style={tableContainer}>
          <table style={tableStyle}>

            <thead style={{ backgroundColor: "#fafafa" }}>
              <tr>
                <th style={headStyle}>Service</th>
                <th style={headStyle}>Billing</th>
                <th style={headStyle}>Charges</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td style={leftStyle}>Tickertape</td>
                <td style={cellStyle}>Monthly / Annual</td>
                <td style={cellStyle}>Free & Paid plans</td>
              </tr>

              <tr>
                <td style={leftStyle}>Smallcase</td>
                <td style={cellStyle}>Per transaction</td>
                <td style={cellStyle}>Depends on portfolio</td>
              </tr>

              <tr>
                <td style={leftStyle}>Sensibull</td>
                <td style={cellStyle}>Monthly</td>
                <td style={cellStyle}>Starts at ₹800/month</td>
              </tr>

              <tr>
                <td style={leftStyle}>Streak</td>
                <td style={cellStyle}>Monthly</td>
                <td style={cellStyle}>Starts at ₹690/month</td>
              </tr>

            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}

/* STYLES */

const headStyle = {
  padding: "20px",
  textAlign: "left",
  fontSize: "15px",
  color: "#424242",
  fontWeight: "500",
  borderBottom: "1px solid #eee",
};

const leftStyle = {
  padding: "20px",
  color: "#666",
  fontSize: "15px",
  borderBottom: "1px solid #eee",
  verticalAlign: "top",
};

const cellStyle = {
  padding: "20px",
  color: "#424242",
  fontSize: "15px",
  lineHeight: "1.8",
  borderBottom: "1px solid #eee",
  verticalAlign: "top",
};

const bottomText = {
  color: "#666",
  fontSize: "15px",
  lineHeight: "1.9",
};

const sectionTitle = {
  fontSize: "28px",
  color: "#424242",
  marginBottom: "25px",
  fontWeight: "500",
};

const tableContainer = {
  border: "1px solid #eee",
  borderRadius: "5px",
  overflow: "hidden",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

export default Brokerage;