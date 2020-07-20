import React from "react";

const ArticleCard = (props) => {
  if (props.article.user.id === 1) {  
    return (
      <div className="userArticle" id="user-style">
        <div className="article__header">
            <div className="nameDate">
                <div className="article__user">
                {props.article.user.username}
                </div>
                <div className="article__date">
                {props.article.date}
                </div>
            </div>        
            <div className="article__deleteButton">
                <button 
                  type="button" 
                  className="fullDeleteBtn"
                  onClick={() => props.deleteArticle(props.article.id)}>
                    Delete
                </button>
            </div>
        </div>
        <div className="articleTitle">
            <h3>
              <a rel="noopener noreferrer" href ={props.article.url} target="_blank">
                {props.article.title}
              </a>
            </h3>
        </div>
        <div className="article__description">
            <p>{props.article.description}</p>
        </div>
    </div>
    );
  }
  else if (props.article.user.id !== 1) {
    return (
      <div className="userArticle" id="friend-style">
        <div className="article__header">
            <div className="nameDate">
                <div className="article__user">
                {props.article.user.username}
                </div>
                <div className="article__date">
                {props.article.date}
                </div>
            </div>        
        </div>
        <div className="articleTitle">
            <h3>
              <a rel="noopener noreferrer" href ={props.article.url} target="_blank">
                {props.article.title}
              </a>
            </h3>
        </div>
        <div className="article__description">
            <p>{props.article.description}</p>
        </div>
    </div>
    );
  }
};

export default ArticleCard;