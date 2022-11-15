import axios from 'axios'

export const getMostRated =async()=>{
    try{
        const res=await axios.get(import.meta.env.VITE_API);
        const mostrated=await res.data
        console.log(mostrated)
        const shuffled=mostrated.sort(()=>0.5-Math.random())
        const mostRated=shuffled.slice(0,5)
        return mostRated
    }
    catch(err){console.log(err)}
}