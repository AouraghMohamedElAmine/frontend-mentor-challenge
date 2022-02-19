import { ADD_LINK, REMOVE_LINKS } from "./constants"

export const LinkReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_LINK:
        console.log(state);
        return [...state ,action.payload]
      case REMOVE_LINKS:
        return []
      default:
        return state
    }
  }