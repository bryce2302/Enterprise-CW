import Events from '../models/events.model'
import extend from 'lodash/extend'
import errorHandler from '../helpers/dbErrorHandler'


const create = async (req, res) => {
  const event = new Events(req.body)
  try {
    await event.save()
    return res.status(200).json({
      message: "Successfully made an event !"
    })
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const list = async (req, res) => {
    try {
      let event = await Events.find().select('_id eventName numAttending')
      res.json(event)
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }

const read = (req, res) => {
  return res.json(req.commentByID)
}

const update = async (req, res) => {
  try {
    let event = req.profile
    event = extend(user, req.body)
    event.numAddending = event.numAddending + 1
    await event.save()
    res.json(event)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const remove = async (req, res) => {
  try {
    let events = req.eventId
    let deletedEvent = await events.remove()
    res.json(deletedEvent)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

export default {
  create,
  read,
  list,
  update,
  remove
}
