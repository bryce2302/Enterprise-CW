import express from 'express'
import eventsCtrl from '../controllers/events.controller'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/events')
  .get(authCtrl.requireSignin, eventsCtrl.list)
  .post(authCtrl.requireSignin, eventsCtrl.create)

  
router.route('/api/events/:eventId')
.put(authCtrl.requireSignin,  userCtrl.update)

export default router
