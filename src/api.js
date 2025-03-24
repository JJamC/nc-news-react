import axios from "axios";

function fetchArticles(
  topic,
  order,
  sortBy,
  limit = 100
) {
    if (!topic || topic === 'all') {
        topic = ""
    }
  return axios
    .get(
      `https://nc-news-project-rbvi.onrender.com/api/articles?topic=${
        topic
        }&&sort_by=${sortBy}&&order=${order}&&limit=${limit}`
    )
    .then((articleData) => {
      return articleData.data.articles;
    });
}

function fetchArticlebyId(id) {
  return axios.get(`https://nc-news-project-rbvi.onrender.com/api/articles/${id}`);
}

function fetchCommentsbyArticleId(id) {
  return axios.get(
    `https://nc-news-project-rbvi.onrender.com/api/articles/${id}/comments`
  );
}

function patchArticleVote(newVote, id) {
  const voteObj = { inc_votes: newVote };
  return axios.patch(
    `https://nc-news-project-rbvi.onrender.com/api/articles/${id}`,
    voteObj
  );
}

function postNewComment(id, newComment) {
  if (!id || !newComment) {
    
  }
  return axios.post(
    `https://nc-news-project-rbvi.onrender.com/api/articles/${id}/comments`,
    newComment
  );
}

function deleteComment(id) {
  return axios.delete(`https://nc-news-project-rbvi.onrender.com/api/comments/${id}`);
}

function fetchTopics() {
  return axios.get(`https://nc-news-project-rbvi.onrender.com/api/topics`);
}

function fetchUser() {
  return axios.get(`https://nc-news-project-rbvi.onrender.com/api/users/cooljmessy`);
}

export {
  fetchArticles,
  fetchArticlebyId,
  fetchCommentsbyArticleId,
  patchArticleVote,
  postNewComment,
  deleteComment,
  fetchTopics,
  fetchUser
};
