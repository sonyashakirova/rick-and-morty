import axios from "axios"
import { useEffect, useState } from "react"

export function useGetItem(category, id) {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/${category}/${id}`,
    }).then((response) => {
      setItem(response.data)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
      setError(true)
    })
  }, [])

  return { item, loading, error }
}
