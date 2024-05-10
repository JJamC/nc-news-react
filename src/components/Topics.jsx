import { useEffect, useState } from "react"
import { fetchTopics } from "../api"
import { Link } from "react-router-dom"

export default function Topics() {

    const [topics, setTopics] = useState([])

    useEffect(() => { 
        fetchTopics().then((topicData) => {
            setTopics(topicData.data.topics)
        })

    }, [])

    return (<div>
        <h2>Topics</h2>
        <ul>
            {topics.map((topic) => {
                return (<li >
                    <Link className="topic-links" to="/articles?topics=coding">
                        <p>{topic.slug}</p>
                    </Link>
                </li>)
            })}
        </ul>
    </div>
    )
}
