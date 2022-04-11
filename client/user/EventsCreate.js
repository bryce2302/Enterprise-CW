import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import {create} from './api-events.js'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {Link} from 'react-router-dom'
import auth from './../auth/auth-helper'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}))

export default function EventsCreate() {
  const classes = useStyles()
  const jwt = auth.isAuthenticated()

  const [values, setValues] = useState({
    eventsName: '',
    open: false,
    error: ''
  })

  const handleChange = eventsName => event => {
    setValues({ ...values, [eventsName]: event.target.value })
  }

  const clickSubmit = () => {
    const eventsName = {
      eventsName: values.eventsName || undefined,
      
    }
    create({t: jwt.token},eventsName).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error})
      } else {
        setValues({ ...values, error: '', open: true})
      }
    })
    location.reload();
  }

    return (<div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            New Event
          </Typography>
          <TextField id="eventsName" type="eventsName" label="Event:" className={classes.textField} value={values.eventsName} onChange={handleChange('eventsName')} margin="normal"/>
          <br/> {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}</Typography>)
          }
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
        </CardActions>
      </Card>
      <Dialog open={values.open} disableBackdropClick={true}>
        <DialogTitle>New Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New Event successfully created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/events">
          </Link>
        </DialogActions>
      </Dialog>
    </div>
    )
}