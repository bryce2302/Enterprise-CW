import express from 'express'
import commentsCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/comments')
  .get(authCtrl.requireSignin, commentsCtrl.list)
  .post(authCtrl.requireSignin, commentsCtrl.create)

router.route('/api/comments/:userId/:commentsId')
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, commentsCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, commentsCtrl.remove)

router.param('commentsId', commentsCtrl.commentsByID)



export default router
