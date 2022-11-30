import axios from "axios";

export const getSearch=async(name)=>{
    try{
        const res=await axios.get(import.meta.env.VITE_API_SEARCH+name);
        const search=await res.data
        console.log(search)
        return search
    }
    catch(err){console.log(err)}
}
