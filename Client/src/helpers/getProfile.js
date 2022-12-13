import axios from "axios";

export const getProfile=async(id)=>{
    try{
        const res=await axios.get(import.meta.env.VITE_API_PROFILE+id);
        const profileData=await res.data
        console.log("profileData",profileData)
        return profileData
    }
    catch(err){console.log(err)}
}