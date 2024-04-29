import likedVideo from '../models/likedVideo.js'
import mongoose from 'mongoose'

export const likeVideoController = async(req,res)=>{
    const likedVideoData= req.body;

    //console.log(likedVideoData)
    const addToLikedVideo= new likedVideo(likedVideoData);

    try {
        await addToLikedVideo.save();
        res.status(200).json('added to likedVideo')
      //  console.log("DOne")
    } catch (error) {
        res.status(400).json(error)       
    }
}

export const getAlllikeVideoController= async (req, res)=>{
    try {
      const files= await likedVideo.find();
      res.status(200).send(files)
      //console.log(files)
    } catch (error) {
      res.status(404).send(error.message)
    }
  }

  export const deleteLikeVideoController= async (req, res)=>{
    const { VideoId: VideoId,Viewer:Viewer}=req.params;
   // console.log(VideoId,Viewer)
    try {
      await likedVideo.findOneAndDelete({
        VideoId: VideoId, Viewer:Viewer
      })
      res.status(200).json({message: "Removed from your liked videos"})
    } catch (error) {
      res.status(400).json({message: error.message})

    }
  }