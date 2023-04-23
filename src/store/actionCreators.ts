import {  ContentAction, GenreContentList } from "../interface"
import { fetchData } from "../services/fetchService"
import * as actionTypes from "./actionTypes"


export async function loadData(page:string){
  const res:GenreContentList= await fetchData(page)
  
  const action: ContentAction = {
    type: actionTypes.FETCH_CONTENT,
    content:res
  }
  return action
 
}