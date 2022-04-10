import express from 'express'
import commentCtrl from '../controllers/comments.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/comments')
  .get(authCtrl.requireSignin, commentCtrl.list)
  .post(authCtrl.requireSignin, commentCtrl.create)


router.route('/api/commentsID/:commentsID')
  .get(authCtrl.requireSignin, commentCtrl.read)
  .delete(authCtrl.requireSignin, commentCtrl.deleteComment)

router.param('commentsID', commentCtrl.commentsID)


router.route('/api/commentsByUser/:commentsByUser')
  .get(authCtrl.requireSignin, commentCtrl.read)

router.param('commentsByUser', commentCtrl.commentsByUser)

 

export default router
