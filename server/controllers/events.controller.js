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


export default {
  create,
  read,
  list
}
