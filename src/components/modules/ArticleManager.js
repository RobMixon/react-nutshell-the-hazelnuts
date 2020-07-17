const remoteURL = "http://localhost:5002"

export default {
  getArticle(id) {
    return fetch(`${remoteURL}/articles/${id}`).then(result => result.json())
  },
  getAllArticles() {
    return fetch(`${remoteURL}/articles`).then(result => result.json())
  },
  getWithUser() {
    return fetch(`${remoteURL}/articles?_expand=user`).then(result => result.json())
  },
  deleteArticle(id) {
    return fetch(`${remoteURL}/articles/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  postArticle(newArticle) {
    return fetch(`${remoteURL}/articles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArticle)
    }).then(data => data.json())
  }
}