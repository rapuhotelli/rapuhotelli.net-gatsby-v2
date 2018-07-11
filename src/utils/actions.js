export const openModal = obj => {
  return {
    type: 'OPEN_MODAL',
    obj, // animation begin details?
  }
}
export const closeModal = obj => {
  return {
    type: 'CLOSE_MODAL',
    obj, // animation end details?
  }
}
export const setFilter = filter => {
  return {
    type: 'SET_FILTER',
    filter,
  }
}
