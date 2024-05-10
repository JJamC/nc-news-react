import axios from "axios";

function fetchArticles(
  topic = 'all',
  order,
  sortBy,
  limit = 100
) {
    if (!topic || topic === 'all') {
        topic = ""
    }
  return axios
    .get(
      `https://j-nc-news.onrender.com/api/articles?topic=${
        topic
        }&&sort_by=${sortBy}&&order=${order}&&limit=${limit}`
    )
    .then((articleData) => {
      return articleData.data.articles;
    });
}

function fetchArticlebyId(id) {
  return axios.get(`https://j-nc-news.onrender.com/api/articles/${id}`);
}

function fetchCommentsbyArticleId(id) {
  return axios.get(
    `https://j-nc-news.onrender.com/api/articles/${id}/comments`
  );
}

function patchArticleVote(newVote, id) {
  const voteObj = { inc_votes: newVote };
  return axios.patch(
    `https://j-nc-news.onrender.com/api/articles/${id}`,
    voteObj
  );
}

function postNewComment(id, newComment) {
  return axios.post(
    `https://j-nc-news.onrender.com/api/articles/${id}/comments`,
    newComment
  );
}

function deleteComment(id) {
  return axios.delete(`https://j-nc-news.onrender.com/api/comments/${id}`);
}

function fetchTopics() {
  return axios.get(`https://j-nc-news.onrender.com/api/topics`);
}

export {
  fetchArticles,
  fetchArticlebyId,
  fetchCommentsbyArticleId,
  patchArticleVote,
  postNewComment,
  deleteComment,
  fetchTopics,
};
