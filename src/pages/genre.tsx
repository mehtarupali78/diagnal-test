import { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react"
import { AnyAction, Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { loadData } from "../store/actionCreators"
import { useSelector } from "react-redux"
import { GenreContentList } from "../interface"

const GenreContainer = lazy(() => import("../component/GenreContainer"));
const Search = lazy(() => import("../component/Search"));


const Genre = () =>{
    const contentdata:GenreContentList = useSelector((state:any)=>state.contentReducer)
    const dispatch :Dispatch<AnyAction>= useDispatch()
    const [searchKey, setSearchKey] = useState("")
    const scrollingElement = useRef<HTMLDivElement>(null)
    const [isScrollLoad, setScrollLoad] = useState(false)

    const getData = useCallback(async()=>{
        if(!contentdata.page["page-num-requested"]) {
            dispatch(await loadData("page1"))
        }
        if(contentdata.page["page-num-requested"] === "1"){
            dispatch(await loadData("page2"))
        }
        else if(contentdata.page["page-num-requested"] === "2"){
            dispatch(await loadData("page3"))
        }
        setScrollLoad(false)
    },[contentdata, dispatch])

    useEffect(()=>{
        getData()
        window.addEventListener('scroll', loadMore);
        return ()=>{
            window.removeEventListener('scroll', loadMore);
        } 
    },[])

    useEffect(()=>{
        if(isScrollLoad){
            getData()
        }
    },[isScrollLoad])
  

    const loadMore = () => {
        if(document.scrollingElement){
            if (window.innerHeight + document.documentElement.scrollTop - 100 === document.scrollingElement.scrollHeight-100) {
                setScrollLoad(true)
            }
        }
    }

    return(
        <div className=" bg-black text-white p-[15px] min-h-screen">
            <Suspense fallback={<div>Loading</div>}>
                <Search searchKey={searchKey} setSearchKey={setSearchKey}/>
                <GenreContainer scrollRef={scrollingElement} contentList={contentdata.page["content-items"].content} searchKey={searchKey} />
            </Suspense>
        </div>
    )
}

export default Genre