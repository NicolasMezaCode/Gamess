import axios from "axios";

export const getRecent=async()=>{
    try{
        const res=await axios.get(import.meta.env.VITE_API_RECENT);
        const mostrecent=await res.data
        console.log(mostrecent)
        const shuffled=mostrecent.sort(()=>0.5-Math.random())
        const getrecent=shuffled.slice(0,5)
        return getrecent
    }
    catch(err){console.log(err)}
}