import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AllRoutes from './Components/AllRoutes'
import DrawerSidebar from './Components/LeftSideBar/DrawerSidebar';
import CreateEditChanel from './Pages/Chanel/CreateEditChanel';
import { useDispatch } from 'react-redux';
import { FetchAllChanel } from './actions/chanelUser';
import VideoUpload from './Pages/VideoUpload/VideoUpload';
import { getAllVideo } from './actions/video';
import { getAlllikedVideo } from './actions/likedVideo';
import { getAllwatchLater } from './actions/watchLater';
import { getAllHistory } from './actions/History';
function App() {
 const dispatch=useDispatch()
 
useEffect(()=>{
   dispatch(FetchAllChanel());
   dispatch(getAllVideo());
   dispatch(getAlllikedVideo());
   dispatch(getAllwatchLater());
   dispatch(getAllHistory());

  


   }, [dispatch]);
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });
  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex",
      });
    } else {
      setToggleDrawerSidebar({
        display: "none",
      });
    }
  };
  const [VidUploadPage, setVidUploadPage]= useState(false)
const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false)
  return (
    <Router>
      {
        VidUploadPage && <VideoUpload setVidUploadPage={setVidUploadPage}/> }
      {
        EditCreateChanelBtn && <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn}/> }
    <Navbar 
    setEditCreateChanelBtn={setEditCreateChanelBtn}
    toggleDrawer={toggleDrawer}
     />
    {
      <DrawerSidebar
      toggleDrawer={toggleDrawer}
      toggleDrawerSidebar={toggleDrawerSidebar}
      />
    }
    <AllRoutes setVidUploadPage={setVidUploadPage} setEditCreateChanelBtn={setEditCreateChanelBtn}/>
    </Router>
  );
}
export default App;
