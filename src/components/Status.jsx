import React from "react";

function Status({winner, status}) {
  return (
    <>
      {winner ? (
        <>
          <div
            className="status"
            style={{ color: "green", marginBottom: "10px" }}
          >
            Winner!
          </div>
          <div className="status" style={{ color: "green", fontSize: "35px" }}>
            {status}
          </div>
        </>
      ) : (
        <div>
          <div
            className="status"
            style={{ color: "black", marginBottom: "10px" }}
          >
            Next player:
          </div>
          <div className="status" style={{ color: "red", fontSize: "35px" }}>
            {status}
          </div>
        </div>
      )}
    </>
  );
}

export default Status;
