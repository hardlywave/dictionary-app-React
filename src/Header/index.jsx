import React from "react";
import "./Header.scss";

const Header = ({ word, setWord }) => {
  return (
    //4.1 Creating the header
    <div className="header">
      <label className="label">Enter your word for search!</label>
      <input
        className="header__input-search"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
    </div>
  );
};

export default Header;
