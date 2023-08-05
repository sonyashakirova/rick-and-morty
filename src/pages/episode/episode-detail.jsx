import { useParams } from "react-router-dom"
import episodes from "../../data/episode.json"

function EpisodeDetail() {
  const { id } = useParams()
  const episode = episodes.find((item) => item.id.toString() === id)
  
  return (
    <div className="content-wrapper">
      <h1 className="title">{episode.name}</h1>
      <p>Episode: {episode.episode}</p>
      <p>Air date: {episode.air_date}</p>
    </div>
  )
}

export default EpisodeDetail
