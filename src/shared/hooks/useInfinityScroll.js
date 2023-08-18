import axios from "axios"
import { useCallback, useEffect, useRef, useState } from "react"

export function useInfinityScroll(category) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [items, setItems] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    // Начало загрузки данных
    setLoading(true)
    setError(false)

    // Отправляем запрос
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/${category}`,
      params: { page: pageNumber },
    }).then((response) => {

      // Обновляем список данных, удаляя дубликаты
      setItems((prevState) => [...new Set([...prevState, ...response.data.results])])

      // Запоминаем, если страница последняя
      setHasMore(response.data.info.pages !== pageNumber)

      // Окончание загрузки данных
      setLoading(false)
    }).catch(() => {
      setLoading(false)
      setError(true)
    })
  }, [pageNumber])

  // Сохраняем данные IntersectionObserver
  const observer = useRef()

  // Сохраняем функцию на определенном элементе с конца списка
  const lastNodeRef = useCallback((node) => {
    // Ждем окончания предыдущей загрузки
    if (loading) return;

    // Отключаем IntersectionObserver с предыдущего элемента
    if (observer.current) {
      observer.current.disconnect()
    }

    // При попадании элемента в зону видимости увеличиваем pageNumber
    // Изменение pageNumber в свою очередь тригеррит useEffect выше
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevState => prevState + 1)
      }
    })

    // Просим IntersectionObserver следить за элементом
    if (node) {
      observer.current.observe(node)
    }
  }, [loading, hasMore])

  return { loading, error, items, lastNodeRef }
}
