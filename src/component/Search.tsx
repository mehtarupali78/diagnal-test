import { Navbar, Typography, Input } from "@material-tailwind/react";
import { Dispatch, useState } from "react";

const Search = (
  props:{searchKey: string, setSearchKey:Dispatch<React.SetStateAction<string>>}) => {
  const {searchKey, setSearchKey} = props
  const [isOpenSearchBox, setOpenSearchBox] = useState(false)
  
  const BackLogo = () => (
      <div className="h-9 w-9">
        <img src="/assets/images/Back.png" alt=""/>
      </div>    
  )

  const SearchLogo = () => (
    <div className="h-9 w-9 cursor-pointer" onClick={OpenCloseSearchHandler}>
      <img src="/assets/images/search.png" alt=""/>
    </div>    
  )

  const OpenCloseSearchHandler = () =>{
     if(isOpenSearchBox){
        setSearchKey("")
        setOpenSearchBox(false)
        return
     }
     setOpenSearchBox(true)
  }

  const searchHandler =(e:any)=>{
    const value = e.target.value
    setSearchKey(value)
  }

  return (
      <Navbar className="bg-gradient-to-b from-black from-70% to-transparent fixed  inset-0 z-10 h-max max-w-full rounded-none pt-2 pb-3 py-2 px-4 lg:px-8 lg:pb-7 lg:pt-4">
        <div className="flex items-center text-blue-gray-900">
          <BackLogo/>
          <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 px-6 text-[34px]"
          >
              Romantic Comedy
          </Typography>
          
          { isOpenSearchBox ? 
            ( <div className="flex flex-row  w-96 gap-6">
                <Input variant="static" placeholder="Static" className=" text-black" 
                value={searchKey} onChange={searchHandler} />
                <span className="text-xl cursor-pointer" onClick={OpenCloseSearchHandler}>close</span>
              </div> )
          : <SearchLogo/>}
        </div>
      </Navbar>
  )
}

export default Search