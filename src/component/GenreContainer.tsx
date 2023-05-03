import { Suspense, lazy } from "react";
import { IContent } from "../interface";
const GenreTile = lazy(() => import("./GenreTile"));

const GenreContainer = (props:{contentList:IContent[], scrollRef:React.RefObject<HTMLDivElement>,searchKey:string}) =>{
    const { contentList, scrollRef, searchKey } = props
    
    return(
    <Suspense fallback={<div>Loading</div>}>
        <div 
        ref={scrollRef} 
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 mb-4">
          {contentList.filter((content)=>content.name
              .toLocaleLowerCase().includes(searchKey))
              .map((content:IContent,index:number)=> <GenreTile key={index} {...content}/>)}
        </div>
     </Suspense>
    )
}

export default GenreContainer