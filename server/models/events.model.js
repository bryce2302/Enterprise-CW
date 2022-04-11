import mongoose from 'mongoose'
import crypto from 'crypto'

const EventsSchema = new mongoose.Schema({
  eventName: {
    type: String,
    trim: true,
    required: 'Event Name is required'
  },
  numAttending:{
    type: Number,
    default: 0,
    min: 0,
  }
})



const eventsModel = mongoose.model('Events', EventsSchema);
eventsModel.createIndexes();
export default eventsModel