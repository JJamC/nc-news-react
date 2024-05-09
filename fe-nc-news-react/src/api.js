import axios from 'axios'

function fetchArticles() {
    return axios.get('https://j-nc-news.onrender.com/api/articles')
        .catch((err) => { console.log(err) })
}

function fetchArticlebyId(id) {
    return axios.get(`https://j-nc-news.onrender.com/api/articles/${id}`)
}

function fetchCommentsbyArticleId(id) {
    return axios.get(`https://j-nc-news.onrender.com/api/articles/${id}/comments`)
}

function patchArticleVote(newVote, id) {
    const voteObj = { inc_votes: newVote }
    return axios.patch(`https://j-nc-news.onrender.com/api/articles/${id}`, voteObj)
        .catch((err) => {
            console.log('vote unsuccessful');
        })
}

function postNewComment(id, newComment) {
    return axios.post(
      `https://j-nc-news.onrender.com/api/articles/${id}/comments`, newComment
    ).catch()
}

function deleteComment(id) {
    return axios.delete(`https://j-nc-news.onrender.com/api/comments/${id}`)
    .catch()
}
    


export { fetchArticles, fetchArticlebyId, fetchCommentsbyArticleId, patchArticleVote, postNewComment, deleteComment }