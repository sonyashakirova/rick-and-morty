import { useParams } from "react-router-dom"
import locations from "../../data/location.json"

function LocationDetail() {
  const { id } = useParams()
  const location = locations.find((item) => item.id.toString() === id)
  
  return (
    <div className="content-wrapper">
      <h1 className="title">{location.name}</h1>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
    </div>
  )
}

export default LocationDetail
