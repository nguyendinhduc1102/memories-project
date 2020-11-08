import moogose from 'mongoose';
const postSchema = moogose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        deffault:0
    },
    createdAt:{
        type: Date,
        deffault: new Date()
    }
});
const PostMessage = moogose.model('PostMessage',postSchema);
export default PostMessage;