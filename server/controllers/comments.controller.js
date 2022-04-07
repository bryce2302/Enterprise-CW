import Comments from '../models/comments.model'
import extend from 'lodash/extend'
import errorHandler from '../helpers/dbErrorHandler'



const create = async (req, res) => {
  const comment = new Comments(req.body)
  try {
    await comment.save()
    return res.status(200).json({
      message: "Successfully signed up!"
    })
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}


const list = async (req, res) => {
  try {
    let comment = await Comment.find().select('_id name userID comments likes')
    res.json(comment)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}


const commentsByID = async (req, res, next, id) => {
  try {
    let comments = await Comments.find({userId : id}).select('_id userID comments likes created')
    if (!comments)
      return res.status('400').json({
        error: "Comment not found"
      })
      res.json(comments)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }}


const update = async (req, res) => {
  try {
    let comments = req.profile
    comments = extend(comments, req.body)
    await comments.save()
    res.json(comments)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const remove = async (req, res) => {
  try {
    let comments = req.profile
    let deletedComments = await comments.remove()
    res.json(deletedComments)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const read = (req, res) => {
  return res.json(req.profile)
}


export default {
  create,
  list,
  read,
  commentsByID,
  update,
  remove
}
