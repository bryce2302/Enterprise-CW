import Comments from '../models/comments.model'
import extend from 'lodash/extend'
import errorHandler from '../helpers/dbErrorHandler'



const create = async (req, res) => {
  const comment = new Comments(req.body)
  try {
    await comment.save()
    comment.Date = Date.now()
    return res.status(200).json({
      message: "Successfully sent comment !"
    })
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}


const list = async (req, res) => {
  try {
    let comment = await Comments.find().select('_id name userID comments datePosted')
    res.json(comment)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}


const commentsByUser = async (req, res) => {
  try {
    let comment = await Comments.find({userID : user._id})
    if (!comment)
      return res.status('400').json({
        error: "No comments found for this User"
      })
      res.json(comment)
  } catch (err) {
    return res.status('400').json({
      error: errorHandler.getErrorMessage(err)
    })
  }}

  const commentsID = async (req, res, next, id) => {
    try {
      let comment = await Comments.findById(id)
      if (!comment)
        return res.status('400').json({
          error: "no comments found with this ID"
        })
      req.commentByID = comment
      next()
    } catch (err) {
      return res.status('400').json({
        error: "Could not retrieve comment"
      })
    }
  }

const update = async (req, res) => {
  try {
    let comments = req.commentByID
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
    let comments = req.commentByID
    let deletedComments = await comments.remove()
    res.json(deletedComments)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const read = (req, res) => {
  return res.json(req.commentByID)
}


export default {
  create,
  list,
  read,
  commentsByUser,
  commentsID,
  update,
  remove
}
