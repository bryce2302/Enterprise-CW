import Comments from '../models/comments.model'
import extend from 'lodash/extend'
import errorHandler from '../helpers/dbErrorHandler'



const create = async (req, res) => {
  const comment = new Comments(req.body)
  try {
    await comment.save()
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
    let comment = await Comments.find().select('_id name userID comments likes')
    res.json(comment)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}


const commentsByID_User = async (req, res) => {
  try {
    let comment = await Comments.find({userId : user._id}).select('_id userID comments likes created')
    if (!comment)
      return res.status('400').json({
        error: "No comments not found for this User"
      })
      res.json(comment)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }}

  const commentsByID = async (req, res, next, id) => {
    try {
      let comment = await Comments.findById(id)
      if (!comment)
        return res.status('400').json({
          error: "no comments found with this ID"
        })
      req.profile = comment
      next()
    } catch (err) {
      return res.status('400').json({
        error: "Could not retrieve comment"
      })
    }
  }

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
  commentsByID_User,
  commentsByID,
  update,
  remove
}
