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
      let event = await Events.find().select('_id eventName eventDesc numAttending')
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
    event = extend (event, req.body)
    event.numAttending = event.numAttending + 1
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

const eventId = async (req, res, next, id) => {
  try {
    let event = await Events.findById(id)
    if (!event)
      return res.status('400').json({
        error: "no event found with this ID"
      })
    req.eventId = event
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve evtn"
    })
  }
}


export default {
  create,
  read,
  list,
  update,
  remove,
  eventId
}
