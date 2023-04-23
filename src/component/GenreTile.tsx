import { IContent } from "../interface"

const GenreTile =(props:IContent)=>{
    const { name,  "poster-image":posterImage} = props
    return (
        <div className="flex flex-col w-full h-full px-[15px] py-[45px]">
            <img src={`/assets/images/${posterImage}`} alt=""/>
            <div className="pt-6 text-[28px]">
                {name}
            </div>
        </div>   
    )
}
export default GenreTile