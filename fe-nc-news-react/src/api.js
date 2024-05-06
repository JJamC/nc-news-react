import axios from 'axios'

function fetchArticles() {
    return axios.get('https://j-nc-news.onrender.com/api/articles')
        .catch((err) => { console.log(err) })
}


export { fetchArticles }