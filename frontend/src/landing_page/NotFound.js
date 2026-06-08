import React from 'react';


function NotFound() {
    return (
        <div 
            className="container mt-5"
            style={{ textAlign: "center" }}
        >

            <h1 style={{ marginTop: "50px" }}>
                404 Not Found
            </h1>

            <p 
                style={{
                    marginTop: "20px",
                    color: "gray"
                }}
            >
               Sorry, the page you are looking for does not exist.
            </p>

            

        </div>
    );
}

export default NotFound;