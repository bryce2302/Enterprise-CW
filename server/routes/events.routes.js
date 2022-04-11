import express from 'express'
import eventsCtrl from '../controllers/events.controller'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/events')
  .get(authCtrl.requireSignin, eventsCtrl.list)
  .post(authCtrl.requireSignin, eventsCtrl.create)
  

router.route('/api/events/:eventId')
.put(authCtrl.requireSignin, authCtrl.hasAuthorization, eventsCtrl.update)
  

router.route('/api/eventId/:userId/:eventId')
  .get(authCtrl.requireSignin, authCtrl.hasAdminAuthorization, eventsCtrl.read)
  .delete(authCtrl.requireSignin, authCtrl.hasAdminAuthorization, eventsCtrl.remove)

router.param('eventId', eventsCtrl.eventId)
router.param('userId', userCtrl.userByID)

export default router
