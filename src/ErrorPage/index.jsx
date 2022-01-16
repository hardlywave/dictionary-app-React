import React from "react";
//
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div class="message">
      <p class="message__rotate">ERROR</p>
      <h1 class="message__error">404</h1>
      <h2 class="message__notfound">Page or Word is not Found</h2>
    </div>
  );
};

export default ErrorPage;
