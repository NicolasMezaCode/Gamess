require('dotenv').config()
const axios=require('axios')


const showMostRated=async(req,res)=>{
    await axios({
        url:"https://api.igdb.com/v4/games",
        method:"POST",
        headers:{
            Accept: "application/json",
            "Client-ID":process.env.CLIENT_ID,
            Authorization: `Bearer ${process.env.AUTHORIZATION}`,
        },
        data:"fields cover.*,total_rating_count,aggregated_rating; where cover!= null & total_rating_count != null; where total_rating_count > 2000 ; limit:5;"
    })
    .then((response)=>{
        res.json(response.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports={
    showMostRated
}