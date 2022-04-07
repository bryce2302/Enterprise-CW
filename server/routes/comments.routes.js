import express from 'express'
import commentsCtrl from '../controllers/comments.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

// router.route('/api/comments')
//   .get(authCtrl.requireSignin, commentsCtrl.list)
//   .post(authCtrl.requireSignin, commentsCtrl.create)


export default router
