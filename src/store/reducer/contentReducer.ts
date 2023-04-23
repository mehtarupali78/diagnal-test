import {  ContentAction, GenreContentList } from "../../interface"
import * as actionTypes from "../actionTypes"

const initialState: GenreContentList = {
  page: {
    title: "",
    "total-content-items" : "",
    "page-num-requested" : "",
    "page-size-requested"  : "",
    "page-size-returned" : "",
    "content-items": {
      content: []
    }
   }
}

const contentReducer = (
    state: GenreContentList = initialState,
    action: ContentAction
  ): GenreContentList => {
    switch (action.type) {
      case actionTypes.FETCH_CONTENT:
        if(state.page["page-num-requested"] !== action.content.page["page-num-requested"]){
         action.content.page["content-items"].content=[...state.page["content-items"].content,...action.content.page["content-items"].content]
        }
         return {
          ...state,
          page:action.content.page
        }
    }
    return state
  }
  
  export default contentReducer