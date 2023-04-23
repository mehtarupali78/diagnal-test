import { Suspense, lazy } from "react";
import { IContent } from "../interface";
const GenreTile = lazy(() => import("./GenreTile"));

const GenreContainer = (props:{contentList:IContent[], scrollRef:React.RefObject<HTMLDivElement>,searchKey:string}) =>{
    const { contentList, scrollRef, searchKey } = props
    
    return(
    <Suspense fallback={<div>Loading</div>}>
        <div 
        ref={scrollRef} 
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mb-4">
          {contentList.filter((content)=>content.name
              .toLocaleLowerCase().includes(searchKey))
              .map((content:IContent)=> <GenreTile {...content}/>)}
        </div>
     </Suspense>
    )
}

export default GenreContainer