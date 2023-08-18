export function sortByDate(array, type) {
  return array.sort((a, b) => {
    switch (type) {
      case "ASC":
        return new Date(a.created) - new Date(b.created)
      case "DESC":
        return new Date(b.created) - new Date(a.created)
      default:
        return 0
    }
  })
}
