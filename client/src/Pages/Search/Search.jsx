import React from 'react'
//import'./Search.css'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import {useParams} from 'react-router-dom';
//import vid from '../../Components/Video/vid.mp4'
import { useSelector } from 'react-redux'
function Search() {
 
const {searchQuery}=useParams();
  const vids=useSelector(state=>state.videoReducer)
  ?.data?.filter(q=>q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).reverse();
   


  return (
    <div className='Container_Pages_App'>
        <LeftSideBar/>
        <div className='Container2_Pages_App'>
            <h2 style={{color:"white"}}>Search Results for {searchQuery}...</h2>
        <ShowVideoGrid vids={vids}/>

        </div>
        </div>
  )
}

export default Search