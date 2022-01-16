import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, useParams, Routes } from "react-router-dom";
//
import Header from "./Header";
import Definition from "./Definition";
import ErrorPage from "./ErrorPage";

const NewComponent = ({ word, meanings, setMeanings }) => {
  let { word: url_word } = useParams();

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word || url_word}`
      );
      console.log(data);
      setMeanings(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [url_word]);
  return <Definition word={word || url_word} meanings={meanings} />;
};

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);

  return (
    <div className="dict">
      <div className="dict__sidebar">
        <Header setWord={setWord}></Header>
      </div>
      <section className="dict__definition">
        <Routes>
          <Route
            exact
            path={`/search/:word`}
            element={
              <NewComponent
                meanings={meanings}
                word={word}
                setMeanings={setMeanings}
              />
            }
          />
          <Route
            exact
            path={`/`}
            element={
              <h4 className="definition__title">
                You should enter the search word!
              </h4>
            }
          />
          <Route exact path={`/search`} element={<ErrorPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
