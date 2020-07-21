import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import ArticleManager from "../modules/ArticleManager";
import UserCard from "../auth/UserCard";
import FriendList from "../friends/FriendList";


const ArticleList = (props) => {

  const [articles, setArticles] = useState([]);

  const getArticles = () => {

    return ArticleManager.getWithUser().then(articlesFromAPI => {
      const articlesByDate = articlesFromAPI.sort((date2, date1) => new Date(date1.date) - new Date(date2.date))
      setArticles(articlesByDate)
    });
  };

  const deleteArticle = id => {
    ArticleManager.deleteArticle(id)
      .then(() => ArticleManager.getWithUser().then(articlesFromAPI => {
        const articlesByDate = articlesFromAPI.sort((date2, date1) => new Date(date1.date) - new Date(date2.date))
        setArticles(articlesByDate)
      })
    )};

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
    <main className="mainFlex">
      <section className="mainFlex__userCard">
        <UserCard />
      </section>
      <section className="mainFlex__subpage">
        <div className="postArticle__button">
          <button type="button"
              className="wideBlueBtn"
              onClick={() => {props.history.push("/articles/new")}}>
              Post New Article
          </button>
        </div>
        <div className="articleContainer-cards">
          {articles.map(article => 
            <ArticleCard 
              key={article.id} 
              article={article}
              deleteArticle={deleteArticle} 
              {...props} />)}
        </div>
      </section>
      <section className="mainFlex__friendList">
        <FriendList {...props} />
      </section>
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