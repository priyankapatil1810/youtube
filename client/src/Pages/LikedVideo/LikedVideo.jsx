import React from 'react'


import vid from '../../Components/Video/vid.mp4'
import WHL from '../../Components/WHL/WHL';
import { useSelector } from 'react-redux';

function LikedVideo() {
  const likedVideoList= useSelector(state=>state.likedVideoReducer)
  console.log(likedVideoList)

  const likedVideo = [
    {
      _id:1,
      video_src: vid,
      Chanel:"62bafe6752cea35a6c30685f",
      title:'video 1',
      Uploder:'abc',
      description:'description of video 1'
    },
    {
      _id:2,
      video_src:vid,
      Chanel:"Video 2",
      description:'description of video 2'
    },
    {
      _id: 3,
      video_src:vid,
      Chanel:"video 3",
      description:"description of video 3"
    },
    {
      _id: 4,
      video_src:vid,
      Chanel:"video 3",
      description:"description of video 3"
    },
  ];
  return (

    <WHL page={"Liked Video"} videoList={likedVideoList}/>
    
    )
}

export default LikedVideo