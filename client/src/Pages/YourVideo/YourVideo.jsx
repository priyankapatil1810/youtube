import React from 'react'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../Components/Video/vid.mp4'
import './yourVideo.css'
import { useSelector } from 'react-redux'

function YourVideo() {
  
  const CurrentUser=useSelector(state=>state?.currentUserReducer);
const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel === CurrentUser?.result?._id).reverse();



  // const vids = [
  //   {
  //     _id:1,
  //     video_src: vid,
  //     Chanel:"62bafe6752cea35a6c30685f",
  //     title:'video 1',
  //     Uploder:'abc',
  //     description:'description of video 1'
  //   },
  //   {
  //     _id:2,
  //     video_src:vid,
  //     Chanel:"Video 2",
  //     description:'description of video 2'
  //   },
  //   {
  //     _id: 3,
  //     video_src:vid,
  //     Chanel:"video 3",
  //     description:"description of video 3"
  //   },
  //   {
  //     _id: 4,
  //     video_src:vid,
  //     Chanel:"video 3",
  //     description:"description of video 3"
  //   },
  // ];
  return (
    <div className='Container_Pages_App'>
    <LeftSideBar/>
    <div className='Container2_Pages_App'>
      <div className='container_yourvideo'>
      <h1>Your Video</h1>
      {
        CurrentUser ?(<>
    <ShowVideoGrid vids={vids}/>
    </>) :<>
    <h3>plz Login to see your uploded video list</h3></>
}
    </div>
    </div>
    </div>
     )
}

export default YourVideo