import * as api from "../api";

export const addTowatchLater=(watchLaterData)=>async(dispatch)=>{
    try {
        const { data } = await api.addTowatchLater(watchLaterData);
       console.log(data)
        dispatch({ type: "POST_WATCHLATER", data });
        dispatch(getAllwatchLater())
      } catch (error) {
        console.log(error);
      }
}

export const getAllwatchLater=()=> async (dispatch)=>{
    try {
      const {data}= await api.getAllwatchLater();
      //console.log(data)
      dispatch({type:'FETCH_ALL_WATCHLATER_VIDEOS',payload:data})
    } catch (error) {
        console.log(error)
    }
  }

  export const deleteWatchLater = (watchLaterData)=> async(dispatch)=>{
    try {
      const {VideoId, Viewer}=watchLaterData
      await api.deleteWatchLater(VideoId,Viewer);
      dispatch(getAllwatchLater());
    } catch (error) {
      console.log(error)
      
    }
  }