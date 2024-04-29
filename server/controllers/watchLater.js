import watchLater from '../models/watchLater.js'
import mongoose from 'mongoose'

export const watchLaterController = async(req,res)=>{
    const watchLaterData= req.body;

    //console.log(watchLaterData)
    const addTowatchLater= new watchLater(watchLaterData);

    try {
        await addTowatchLater.save();
        res.status(200).json('added to watchLater')
       //console.log("DOne")
    } catch (error) {
        res.status(400).json(error)       
    }
}

export const getAllwatchLaterController= async (req, res)=>{
    try {
      const files= await watchLater.find();
      res.status(200).send(files)
     // console.log(files)
    } catch (error) {
      res.status(404).send(error.message)
    }
  }

  export const deletewatchLaterController= async (req, res)=>{
    const { VideoId: VideoId,Viewer:Viewer}=req.params;
    //console.log(VideoId,Viewer)
    try {
      await watchLater.findOneAndDelete({
        VideoId: VideoId, Viewer:Viewer
      })
      res.status(200).json({message: "Removed from your watch Laters"})
    } catch (error) {
      res.status(400).json({message: error.message})

    }
  }