import React from 'react'
import'./Home.css'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
//import vid from '../../Components/Video/vid.mp4'
import { useSelector } from 'react-redux'
function Home() {
 

  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();
   //console.log(videosFile)
  
  // const vids = [
  //  {
  //      _id:1,
  //      video_src: vid,
  //      Chanel:"62bafe6752cea35a6c30685f",
  //      title:'video 1',
  //      Uploder:'abc',
  //      description:'description of video 1'
  //    },
  //    {
  //      _id:2,
  //      video_src:vid,
  //      Chanel:"Video 2",
  //      description:'description of video 2'
  //   },
  //    {
  //      _id: 3,
  //      video_src:vid,
  //      Chanel:"video 3",
  //      description:"description of video 3"
  //    },
  //    {
  //      _id: 4,
  //      video_src:vid,
  //     Chanel:"video 3",
  //    description:"description of video 3"
  //    },
  // ];
  const NavList=[
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy",
    "Python",
    "Java",
    "C++",
  ]

  return (
    <div className='Container_Pages_App'>
        <LeftSideBar/>
        <div className='Container2_Pages_App'>
          <div className='navigation_Home'>
            {
              NavList.map(m=>{
                return(
                <p className='btn_nav_home'>
                  {m}
                </p>)
              })
            }
          </div>
        <ShowVideoGrid vids={vids}/>

        </div>
        </div>
  )
}

export default Home