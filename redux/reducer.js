import { ADD_LINK, REMOVE_LINKS, SET_COPIED_LINK } from "./constants"

export const LinkReducer = (state = [ ], action) => {
    switch (action.type) {
      case ADD_LINK:
         return [...state ,action.payload]
         case SET_COPIED_LINK:
          return  action.payload 
      case REMOVE_LINKS:
         return []
      default:
        return state
    }
  }