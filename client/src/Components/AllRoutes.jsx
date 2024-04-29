import React from 'react'

import Home from '../Pages/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Library from '../Pages/Library/Library';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import WatchLater from '../Pages/WatchLater/WatchLater'
import LikedVideo from '../Pages/LikedVideo/LikedVideo'
import VideoPage from '../Pages/VideoPage/VideoPage';
import YourVideo from '../Pages/YourVideo/YourVideo';
import Chanel from '../Pages/Chanel/Chanel';
import Search from '../Pages/Search/Search';
function AllRoutes({setVidUploadPage, setEditCreateChanelBtn}) {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/Library' element={ <Library/>}/>
            <Route path='/History' element={ <WatchHistory/>}/>
            <Route path='/WatchLater' element={ <WatchLater/>}/>
            <Route path='/yourVideos' element={ <YourVideo/>}/>
            <Route path='/LikedVideo' element={ <LikedVideo/>}/>
            <Route path='/videoPage/:vid' element={ <VideoPage/>}/>
            <Route path='/seacrh/:searchQuery' element={ <Search/>}/>

            <Route path='/chanel/:Cid' element={ <Chanel setVidUploadPage={setVidUploadPage} setEditCreateChanelBtn={setEditCreateChanelBtn}/>}/>




        </Routes>
        
    </div>
  )
}

export default AllRoutes