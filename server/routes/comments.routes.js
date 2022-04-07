import express from 'express'
import commentsCtrl from '../controllers/comments.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/comments')
  .get(authCtrl.requireSignin, commentsCtrl.list)
  .post(authCtrl.requireSignin, commentsCtrl.create)

// router.route('/api/comments/:userId/:commentsId')
//   .get(authCtrl.requireSignin, authCtrl.hasAuthorization, commentsCtrl.read)
//   .put(authCtrl.requireSignin, authCtrl.hasAuthorization, commentsCtrl.update)
//   .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, commentsCtrl.remove)

// router.param('comments/:userId', commentsCtrl.commentsByID)



export default router
