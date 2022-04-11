import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import auth from './../auth/auth-helper'
import { CardContent } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import {list} from './api-events.js'
import {update} from './api-events'
import {remove} from './api-events'

const useStyles = makeStyles(theme => ({
  eventStyle:{
    margin: `5px 5px 12px 5px`,
    backgroundColor: `#f6dcf7`,
    border: `2px solid black`
  },

  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  }
}))




export default function Events({ match }) {
  const classes = useStyles()
  const [events, setEvents] = useState([])
  
  const jwt = auth.isAuthenticated()
    
 

  const [values, setValues] = useState({
    numAttending: '',
    open: false,
    error: ''
  })

 
  /** const clickAttending = () => {
    const event = {
      numAttending: values.numAttending || undefined
    }
    update({
      eventId: match.params.eventId
    }, {
      t: jwt.token
    }, event).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, userId: data._id}) 
        
      }
    })
    location.reload();
  }
  */


  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    list({t: jwt.token},signal).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        setEvents(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }
  }, [])

 
  function removeEvent (events){
    remove(events, {t: auth.isAuthenticated().token}, auth.isAuthenticated().event._id ).then((data) =>{
      if (data.error) {
       // setValues({ ...values, error: data.error})
      } else {
       // setValues({ ...values, error: '', open: true})
      }
      /**location.reload() */
    })
  }

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="h6" className={classes.title}>

       Events Page

      </Typography>

      <CardContent>
        <List dense>
          {events.map((item, i) => {
                  return (
                    <Card className = {classes.eventStyle}>
                      
                              <ListItemText primary={item.eventName}/>
                              <Button size="medium" onClick={() => removeEvent(item._id)}>Delete</Button>
                        

                   {/* <Button id="numAttending" type="numAttending" className={classes.textField} value={values.numAttending} onClick={clickAttending} margin="normal"> Attend Event </Button>  */}

                              

                    </Card>
                  )
                })
          }
        </List>
      </CardContent>
    </Paper>
  )
}
