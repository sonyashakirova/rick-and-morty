import { Link } from "react-router-dom"
import episodes from "../../data/episode.json"

export function EpisodeList() {
  return (
    <div className="content-wrapper">
      <h1 className="title">Episodes</h1>
      <ul className="list">
        {episodes.map(({ id, name, episode }) => (
          <li key={id}>
            <Link to={`/episodes/${id}`}>{name} ({episode})</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
