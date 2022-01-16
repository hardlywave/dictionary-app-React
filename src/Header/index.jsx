import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ setWord }) => {
  const [newWord, setNewWord] = useState("");

  return (
    <div className="header">
      <label className="label">Enter your word for search!</label>
      <input
        className="header__input-search"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
      />
      <Link to={`/search/${newWord}`} className="dict__sidebar__link">
        <button
          className="dict__sidebar__link__button"
          onClick={() => setWord(newWord)}
        >
          Search the word
        </button>
      </Link>
    </div>
  );
};

export default Header;
