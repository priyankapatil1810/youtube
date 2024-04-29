import mongoose from "mongoose";

const HistorySchema= mongoose.Schema({
    VideoId: {type:String,require:true},
    Viewer: {type:String,require:true},
    LikedOn:{type:Date,default:Date.now}

})

export default mongoose.model('History',HistorySchema)