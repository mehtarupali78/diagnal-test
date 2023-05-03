import { SyntheticEvent } from "react";
import { IContent } from "../interface"

const GenreTile =(props:IContent)=>{
    const { name,  "poster-image":posterImage} = props

    const imageErrorHandler = (
        event: SyntheticEvent<HTMLImageElement, Event>
    ) => {
        event.currentTarget.src = `${process.env.PUBLIC_URL}/assets/images/placeholder_for_missing_posters.png`;
        event.currentTarget.className = "error";
    };

    return (
        <div className="flex flex-col w-full h-full px-[10px] sm:px-[10px] md:px-[15px] lg:px-[15px] xl:px-[15px] py-[15px] sm:py-[15px] md:py-[25px] lg:py-[35px]">
            <img src={`${process.env.PUBLIC_URL}/assets/images/${posterImage}`} alt="" onError={imageErrorHandler}/>
            <div className="pt-3  text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[24px] ">
                {name}
            </div>
        </div>   
    )
}
export default GenreTile