import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import {create} from './api-comments'
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

export default function CommentsCreate() {
  const classes = useStyles()
  const jwt = auth.isAuthenticated()

  const [values, setValues] = useState({
    comments: '',
    open: false,
    error: ''
  })

  const handleChange = comments => event => {
    setValues({ ...values, [comments]: event.target.value })
  }

  const clickSubmit = () => {
    const comments = {
      comments: values.comments || undefined,
      name: auth.isAuthenticated().user.name, //gets the user name
      userID: auth.isAuthenticated().user._id  //gets the users ID
    }
    create({t: jwt.token},comments).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error})
      } else {
        setValues({ ...values, error: '', open: true})
      }
    })
    //location.reload();
  }

    return (<div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            New Comment
          </Typography>
          <TextField id="comments" type="comments" label="Comment:" className={classes.textField} value={values.comments} onChange={handleChange('comments')} margin="normal"/>
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
        <DialogTitle>New Comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New comment successfully created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/comments">
          </Link>
        </DialogActions>
      </Dialog>
    </div>
    )
}