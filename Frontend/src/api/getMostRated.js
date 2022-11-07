
export const getMostRated =async()=>{
    const DBURL="https://api.igdb.com/v4"
    await fetch(DBURL,{
        method:'post',
        headers:{
            'Client-ID':`${import.meta.env.VITE_CLIENT_ID}`,
            Authorization:`Bearer ${import.meta.env.VITE_AUTHORIZATION}`
        },
        body:"fields name,cover.*,artworks.*,aggregated_rating_count; where cover!= null & aggregated_rating_count != null; where aggregated_rating_count > 8"
    })
    .then((response) => response.json())
    .then((response) => console.log(res.json(response)))
}