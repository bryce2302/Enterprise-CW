import mongoose from 'mongoose'
import crypto from 'crypto'

const CommentsSchema = new mongoose.Schema({
  UserID: {
    type: String,
    trim: true,
    required: 'User id required'
  },
  Name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  Comments: {
    type: String,
    trim: true,
    required: 'Comment is required'
  },
  Likes: {
    type: Number,
    default: 0,
    min: 0
  }
})




const commentsModel = mongoose.model('Comments', CommentsSchema);
userModel.createIndexes();
export default commentsModel