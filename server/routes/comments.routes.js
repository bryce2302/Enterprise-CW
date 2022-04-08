import express from 'express'
import commentCtrl from '../controllers/comments.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/comments')
  .get(authCtrl.requireSignin, commentCtrl.list)
  .post(authCtrl.requireSignin, commentCtrl.create)


router.route('/api/commentsByID/:commentsByID')
  .get(authCtrl.requireSignin, commentCtrl.read)

router.param('commentsByID', commentCtrl.commentsByID)

 
router.route('/api/commentsByIDUser/:commentsByIDUser')
  .get(authCtrl.requireSignin, commentCtrl.read)

router.param('commentsByIDUser', commentCtrl.commentsByIDUser)



export default router
