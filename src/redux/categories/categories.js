const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS'

const initialState = []

const categories = (state = initialState, action) => {
  switch(action.type) {
    case CHECK_STATUS:
      return [
        'Under construction'
      ]
    default:
      return state
  }
}

const chackStatus = () => {
  return { type: CHECK_STATUS }
}

export default categories
export { chackStatus }