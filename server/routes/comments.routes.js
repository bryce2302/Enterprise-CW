import express from 'express'
import commentCtrl from '../controllers/comments.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/comments')
  .get(authCtrl.requireSignin, commentCtrl.list)
  .post(authCtrl.requireSignin, commentCtrl.create)


router.route('/api/commentsID/:commentsID')
  .get(authCtrl.requireSignin, commentCtrl.read)

router.param('commentsID', commentCtrl.commentsByID)


router.route('/api/commentsByIDUser/:commentsByIDUser')
  .get(authCtrl.requireSignin, commentCtrl.read)

router.param('commentsByIDUser', commentCtrl.commentsByIDUser)



export default router
