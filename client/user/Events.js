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
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";


const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing(1),
    margin: theme.spacing(5)
  }),
  eventStyle:{
    margin: `5px 5px 12px 5px`,
    backgroundColor: `#f6dcf7`,
  },

  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  }
}))




export default function Events() {
  const classes = useStyles()
  const [events, setEvents] = useState([])
  
  const jwt = auth.isAuthenticated()
    
 

  const [values, setValues] = useState({
    numAttending: '',
    checked: false,
    open: false,
    error: ''
  })

  const handleChange = checked => event => {
    setValues({ ...values, [checked]: event.target.value })
  }

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
                              
                              {/* <FormControlLabel
                              control={<Checkbox checked={checked} onChange={handleChange} />}
                              label="Do you wish to attend this event?"
                              /> */}
                              <Checkbox id="checkbox" checked={values.checked} onChange={handleChange('checked')}
                              >

                              <label for="checkbox">do you wish to attend? </label>
                              </Checkbox>
                              

                    </Card>
                  )
                })
          }
        </List>
      </CardContent>
    </Paper>
  )
}
