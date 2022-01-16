import React from "react";
//
import "./Definition.scss";

const Definition = ({ word, meanings }) => {
  return (
    <div className="definition">
      {meanings[0] && word && (
        <div className="singleMean">
          <b>
            Phonetic: [<code>{meanings[0].phonetics[0].text}</code>]
          </b>
          <hr
            style={{
              color: "#00495f",
              width: "100%",
            }}
          />
          <audio
            controls
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          >
            Your Browser doesn't support audio element.
          </audio>
        </div>
      )}
      {meanings.map((mean) =>
        mean.meanings.map((item) =>
          item.definitions.map((def) => (
            <div className="singleMean">
              <b>{def.definition}</b>
              <hr
                style={{
                  color: "#00495f",
                  width: "100%",
                }}
              />
              {def.example && (
                <span>
                  <b>Example: </b>
                  {def.example}
                </span>
              )}
              {def.synonyms && (
                <span>
                  <b>Synonyms: </b>
                  {def.synonyms.map((s) => `${s}, `)}
                </span>
              )}
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Definition;
