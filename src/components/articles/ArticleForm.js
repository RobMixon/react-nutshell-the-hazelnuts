// form with URL, userID, title, synopsis, data (auto)
// save button to print to API

import React, { useState } from 'react';
import ArticleManager from '../modules/ArticleManager';
import { currentDateTime } from "../modules/helperFunctions";
import './styles/ArticleForm.css'

const ArticleForm = props => {
  const [article, setArticle] = useState({ title: "", description: "", url: "", date: "", userId: "" });
  const [isLoading, setIsLoading] = useState(false);
  

  const handleFieldChange = evt => {
    const stateToChange = { ...article };
    stateToChange[evt.target.id] = evt.target.value;
    setArticle(stateToChange);
  };

  const constructNewArticle = evt => {
    evt.preventDefault();
    if (article.title === "" || article.description === "" || article.url === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      const timestamp = Date.now()
      article.date = currentDateTime(timestamp);
      article.userId= 1;
      ArticleManager.postArticle(article)
        .then(() => props.history.push("/articles"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="title"
              placeholder="Article Title..."
            />
            <label htmlFor="title">Headline</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="description"
              placeholder="Article Description..."
            />
            <label htmlFor="description">Synopsis</label>
            <input
              type="text"
              onChange={handleFieldChange}
              id="url"
              placeholder="Article URL..."
            />
            <label htmlFor="url">Link</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewArticle}
            >Post</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ArticleForm