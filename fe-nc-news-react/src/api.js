import axios from 'axios'

function fetchArticles(msg) {
    return axios.get('https://j-nc-news.onrender.com/api/articles')
        .catch((err) => { console.log(err) })
}


export { fetchArticles }