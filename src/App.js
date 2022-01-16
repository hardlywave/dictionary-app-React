import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Definition from "./Definition";

const NewComponent = (props) => {
  console.log(props);
  return (
    <section className="dict__definition">
      <Definition word={""} meanings={""} />
    </section>
  );
};

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      console.log(data);
      setMeanings(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word]);

  return (
    <div className="dict">
      <div className="dict__sidebar">
        <Header word={word} setWord={setWord}></Header>
        <Link to={`/search/${word}`} className="dict__sidebar__link">
          <button className="dict__sidebar__link__button">
            Search the word
          </button>
        </Link>
      </div>
      <Routes>
        <Route path={`/search/:word`} component={NewComponent} />
      </Routes>
    </div>
  );
}

export default App;
