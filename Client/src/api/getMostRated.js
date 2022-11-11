import axios from 'axios'

export const getMostRated =async()=>{
    try{
        const res=await axios.get(import.meta.env.VITE_API);
        const mostRated=await res.data
        return mostRated
    }
    catch(err){console.log(err)}
}