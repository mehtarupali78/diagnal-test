import axios from "axios";

export const fetchData = async (page:string) =>{
    try {
        const response = await axios.get(`./data/api/CONTENTLISTINGPAGE-${page}.json`);
        return response.data
      } catch (error) {
        throw Error(`Error ${error}`)
      }
}