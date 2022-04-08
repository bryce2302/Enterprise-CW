import express from 'express'
import commentCtrl from '../controllers/comments.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/comments')
  .get(authCtrl.requireSignin, commentCtrl.list)
  .post(authCtrl.requireSignin, commentCtrl.create)


router.route('/api/comments/commentsID/:commentsID')
  .get(authCtrl.requireSignin, commentCtrl.list)

router.param('commentsID', commentCtrl.commentsByID)


router.route('/api/comments/commentsByID_User/:commentsByID_User')
  .get(authCtrl.requireSignin, commentCtrl.list)

router.param('commentsByID_User', commentCtrl.commentsByID_User)



export default router
