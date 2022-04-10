import express from 'express'
import commentCtrl from '../controllers/comments.controller'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/comments')
  .get(authCtrl.requireSignin, commentCtrl.list)
  .post(authCtrl.requireSignin, commentCtrl.create)


router.route('/api/commentsID/:userId/:commentsID')
  .get(authCtrl.requireSignin, authCtrl.hasAdminAuthorization, commentCtrl.read)
  .delete(authCtrl.requireSignin, authCtrl.hasAdminAuthorization, commentCtrl.deleteComment)

router.param('commentsID', commentCtrl.commentsID)
router.param('userId', userCtrl.userByID)


router.route('/api/commentsByUser/:commentsByUser')
  .get(authCtrl.requireSignin, commentCtrl.read)

router.param('commentsByUser', commentCtrl.commentsByUser)
router.param('userId', userCtrl.userByID)

 

export default router
