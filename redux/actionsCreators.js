import { ADD_LINK, REMOVE_LINKS } from "./constants";

export const addlink = (link) => async (dispatch, getState) => {
    dispatch({type : ADD_LINK , payload : link})
};
export const removelinks = () => async (dispatch, getState) => {
    dispatch({type : REMOVE_LINKS })
};
