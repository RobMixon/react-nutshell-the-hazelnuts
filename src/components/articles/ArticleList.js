import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import ArticleManager from "../modules/ArticleManager";


const ArticleList = (props) => {

  const [articles, setArticles] = useState([]);

  const getArticles = () => {

    return ArticleManager.getWithUser().then(articlesFromAPI => {
      setArticles(articlesFromAPI)
    });
  };

  const deleteArticle = id => {
    ArticleManager.deleteArticle(id)
      .then(() => ArticleManager.getWithUser().then(setArticles));
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
    <main className="mainArticleContainer">
      <section className="postArticle__button">
        <button type="button"
            className="wideBlueBtn"
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
    </main>
    </>
  );
};
export default ArticleList








// get Articles function

// delete article function

// save article funtion

// useEffect

// return : open form button + ArticleCard function