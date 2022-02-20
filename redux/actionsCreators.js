import { ADD_LINK, REMOVE_LINKS, SET_COPIED_LINK } from "./constants";

export const addlink = (link) => async (dispatch, getState) => {
  dispatch({ type: ADD_LINK, payload: link });
};

export const removelinks = () => async (dispatch, getState) => {
  dispatch({ type: REMOVE_LINKS });
};

export const setCopiedLink = (id) => async (dispatch, getState) => {
  const { links } = getState();
  console.log("id = "+id);
 const newLinks = links.filter(e => {
     if(e.id  ==  id){
         e.copied=true
     }
     else{
        e.copied=false
     }
   return  e

 });
  
  dispatch({type : SET_COPIED_LINK , payload : newLinks })
};
