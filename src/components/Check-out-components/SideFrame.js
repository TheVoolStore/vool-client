import React from "react";

const SideFrame = ({ items }) => {
  const subTotal = items.reduce((pt, p) => {
    return pt + p.productPrice;
  }, 0);
  return (
    <>
      <div className="sideBar">
        <div className="sTopbar">
          <h6 style={{ fontSize: "1.3rem" }}>
            {items.length > 1
              ? `${items.length} items`
              : `${items.length} item`}{" "}
          </h6>{" "}
          <a href=" ">Edit</a>
        </div>
        {items.map((prod) => (
          <>
            <div className="item">
              <img src={prod.productImage} alt={prod.productName} />
              <caption>
                <p>{prod.productName}</p>
                <p style={{ color: "#f85e00" }}>
                  <strong>N{prod.productPrice}</strong>
                </p>
                <p>
                  <strong>{prod.productColor}</strong>
                </p>
                <p>
                  <strong>{prod.productSize}</strong>
                </p>
                <p>
                  <strong>Qty: {prod.productQuantity}</strong>
                </p>
              </caption>
            </div>
          </>
        ))}
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1.5em",
          }}
        >
          <p>Sub total</p> <strong>{subTotal}</strong>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1.5em",
          }}
        >
          <p>Delivery</p> <strong>N2500</strong>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1.5em",
          }}
        >
          <p>To be delivered</p> <strong>{""}</strong>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1.5em",
            marginBottom: "0px",
          }}
        >
          <strong>Total</strong>{" "}
          <strong style={{ color: "#f85e00" }}>{subTotal + 2500}</strong>
        </div>
      </div>

      <button
        style={{
          color: "white",
          background: "#f85e00",
          width: "100%",
          boxShadow: "rgba(248, 94, 0, 0.7)",
          border: "0px",
          borderRadius: ".5em",
          margin: "24px auto",
          padding: "1em",
        }}
      >
        Buy Now
      </button>
    </>
  );
};

export default SideFrame;
