import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, useParams, Routes } from "react-router-dom";

import Header from "./Header";
import Definition from "./Definition";
import ErrorPage from "./ErrorPage";

const NewComponent = ({ word, meanings, setMeanings, setLoading }) => {
  let { word: url_word } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word || url_word}`
      )
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        setMeanings(data);
      })
      .catch(() => {
        return setLoading(false)((window.location.href = "/error"));
      });
  }, [url_word]);
  return <Definition word={word || url_word} meanings={meanings} />;
};

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="dict">
      <div className="dict__sidebar">
        <Header
          loading={loading}
          setLoading={setLoading}
          setWord={setWord}
        ></Header>
      </div>
      <section className="dict__definition">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route
            exact
            path={`/`}
            element={
              <h4 className="definition__title">
                You should enter the search word!
              </h4>
            }
          />
          <Route
            exact
            path={`/search/:word`}
            element={
              <NewComponent
                meanings={meanings}
                word={word}
                setMeanings={setMeanings}
                setLoading={setLoading}
              />
            }
          />
        </Routes>
      </section>
    </div>
  );
}

export default App;
