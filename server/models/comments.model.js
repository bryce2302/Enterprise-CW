import mongoose from 'mongoose'
import crypto from 'crypto'

const CommentsSchema = new mongoose.Schema({
  userID: {
    type: String,
    trim: true,
    required: 'User id required'
  },
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  comments: {
    type: String,
    trim: true,
    required: 'Comment is required'
  },
  likes: {
    type: Number,
    default: 0,
    min: 0
  }
})



const commentsModel = mongoose.model('Comments', CommentsSchema);
commentsModel.createIndexes();
export default commentsModel