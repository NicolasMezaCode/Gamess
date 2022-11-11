import axios from 'axios'

export const getMostRated =async()=>{
    try{
        const res=await axios.get('http://localhost:3005/most-rated/');
        const mostRated=await res.data
        return mostRated
    }
    catch(err){console.log(err)}
}