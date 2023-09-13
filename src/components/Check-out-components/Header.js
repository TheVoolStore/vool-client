import React from "react";
import { FaCartPlus, FaHamburger } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div
        className="title"
        style={{ float: "left", marginLeft: "6rem", marginTop: "1rem" }}
      >
        <FaHamburger
          style={{
            color: "rgba(0, 0, 0, .5)",
            width: "1.5rem",
            height: "1.5rem",
            margin: "0px",
          }}
        />

        <h4>VOOL</h4>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "8rem",
          marginTop: "0.5em",
          width: "20%",
        }}
      >
        <FaUser
          style={{
            color: "rgba(0, 0, 0, .5)",
            width: "1.5rem",
            height: "1.45rem",
            margin: "0px",
          }}
        />
        <FaHeart
          style={{
            color: "rgba(0, 0, 0, .5)",
            width: "1.5rem",
            height: "1.5rem",
            margin: "0px",
          }}
        />
        <FaCartPlus
          style={{
            color: "rgba(0, 0, 0, .5)",
            width: "1.5rem",
            height: "1.5rem",
            margin: "0px",
          }}
        />
        <Search>search</Search>
      </div>
    </header>
  );
};

const Search = ({ children }) => {
  return (
    <input
      className="search"
      type="text"
      style={{
        border: "1px solid gray",
        borderRadius: "2em",
        width: "15ch",
        height: "2rem",
        fontSize: "16px",
        backgroundColor: "white",
        backgroundPosition: "10px 10px",
        backgroundRepeat: "no-repeat",
        padding: " 12px 20px 12px 40px",
      }}
      placeholder={children}
    />
  );
};

export default Header;
