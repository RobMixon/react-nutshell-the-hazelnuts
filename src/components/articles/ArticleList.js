import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import ArticleManager from "../modules/ArticleManager";


const ArticleList = (props) => {
  // The initial state is an empty array
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    // After the data comes back from the API, we
    //  use the setarticles function to update state
    return ArticleManager.getWithUser().then(articlesFromAPI => {
      setArticles(articlesFromAPI)
    });
  };

  const deleteArticle = id => {
    ArticleManager.deleteArticle(id)
      .then(() => ArticleManager.getWithUser().then(setArticles));
  };

  // got the articles from the API on the component's first render
  useEffect(() => {
    getArticles();
  }, []);

  // Finally we use map() to "loop over" the articles array to show a list of article cards
  return (
    <>
    
      <section className="section-content">
        <button type="button"
            className="admitbtn"
            onClick={() => {props.history.push("/articles/new")}}>
            Post New Article
        </button>
      </section>
      <div className="articleContainer-cards">
        {articles.map(article => 
          <ArticleCard 
            key={article.id} 
            article={article}
            deleteArticle={deleteArticle} 
            {...props} />)}
      </div>
    </>
  );
};
export default ArticleList








// get Articles function

// delete article function

// save article funtion

// useEffect

// return : open form button + ArticleCard function