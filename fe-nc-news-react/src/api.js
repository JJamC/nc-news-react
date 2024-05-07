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


export { fetchArticles, fetchArticlebyId, fetchCommentsbyArticleId }