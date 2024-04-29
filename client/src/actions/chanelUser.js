import * as api from '../api'


export const FetchAllChanel=()=>async(dispatch)=>{
    try {
        const {data}= await api.FetchAllChanel();
    dispatch({type:'FETCH_CHANELS',payload:data})
    } catch (error) {
        console.log(error)
    }
    
}
export const updateChanelData=(id,updateDate)=> async(dispatch)=>{
    try {
        const {data}= await api.updateChanelData(id,updateDate);
        dispatch({type:'UPDATE_DATA',payload: data})
    } catch (error) {
        console.log(error)
    }
}