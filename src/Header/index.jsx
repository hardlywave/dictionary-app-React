import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ loading, setWord, setLoading }) => {
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
          onClick={() => {
            setLoading(true);
            setWord(newWord);
          }}
        >
          Search the word
        </button>
      </Link>
      {loading && (
        <div className="div__spinner">
          <svg class="spinner" viewBox="0 0 50 50">
            <circle
              class="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke-width="5"
            ></circle>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Header;
