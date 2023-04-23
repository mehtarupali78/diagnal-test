export interface IContent {
    name: string
    "poster-image": string
}

export interface GenreContentList {
    page: {
     title: string,
     "total-content-items" : string,
     "page-num-requested" : string,
     "page-size-requested" : string,
     "page-size-returned" : string,
     "content-items": {
       content: IContent[]
     }
    }
 }

export interface ContentAction {
    type: string
    content: GenreContentList
}




