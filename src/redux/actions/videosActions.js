import {SET_VIDEOS,TOGGLE_VIDEO_FETCHING_STATE} from "../actionType"
import axios from "axios"
import config from "../../config"

export const fetchTrendingVideos = (pageToken="") => async dispatch =>{
  try{
      dispatch({type:SET_VIDEOS,payload:null })
      dispatch({type:TOGGLE_VIDEO_FETCHING_STATE})
      const {data} = await axios(`${config.BASE_URL}/videos?part=snippet&key=${config.API_KEY}&regionCode=IN&chart=mostPopular&maxResults=15${pageToken.length!==0?"&pageToken="+pageToken: ""}`)
      dispatch({type:SET_VIDEOS,payload:data})
  }
  catch(err){
      console.error(err)
  }
  finally{
      dispatch({type:TOGGLE_VIDEO_FETCHING_STATE})
  }
} 

export const fetchLikedVideos = () => async (dispatch,getState) =>{
    const accessToken = getState().userState.user.access_token
    try{
        dispatch({type:SET_VIDEOS,payload:null })
        dispatch({type:TOGGLE_VIDEO_FETCHING_STATE})
        const sam = await axios(`${config.BASE_URL}/channels?part=contentDetails&mine=true&key=${config.API_KEY}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: "application/json"
            }
        })

        const cId = sam.data.items[0].contentDetails.relatedPlaylists.likes
        const {data} = await axios(`${config.BASE_URL}/playlistItems?part=snippet&playlistId=${cId}&key=${config.API_KEY}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: "application/json"
            }
        })
        dispatch({type:SET_VIDEOS,payload:data})
    }
    catch(err){
        console.error(err)
    }
    finally{
        dispatch({type:TOGGLE_VIDEO_FETCHING_STATE})
    }
  } 
  

export const fetchSearchVideos = (searchQuery,pageToken="") => async dispatch =>{
    try{
        dispatch({type:TOGGLE_VIDEO_FETCHING_STATE})
        const {data} = await axios(`${config.BASE_URL}/search?part=snippet&key=${config.API_KEY}&regionCode=IN&type=video&chart=mostPopular&maxResults=15${pageToken.length!==0?"&pageToken="+pageToken: ""}&q=${searchQuery}`)
        dispatch({type:SET_VIDEOS,payload:data})
    }
    catch(err){ 
        console.error(err)
    }
    finally{
        dispatch({type:TOGGLE_VIDEO_FETCHING_STATE})
    }
  } 