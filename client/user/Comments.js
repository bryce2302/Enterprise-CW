import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import auth from '../auth/auth-helper'
import {list} from './api-comments.js'
import { CardContent } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import {remove} from './api-comments.js'

 


const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing(1),
    margin: theme.spacing(5)
  }),
  commentsStyle:{
    margin: `5px 5px 12px 5px`,
    backgroundColor: `#e8ffe3`,
    border: `2px solid grey`
  },
  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  }
}))




export default function Comments() {
  const classes = useStyles()
  const [comments, setComments] = useState([])
  const jwt = auth.isAuthenticated()
    

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    list({t: jwt.token},signal).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        setComments(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }
  }, [])


  function removeComment (comment){
    remove(comment, {t: auth.isAuthenticated().token}, auth.isAuthenticated().user._id).then((data) =>{
      if (data.error) {
       // setValues({ ...values, error: data.error})
      } else {
       // setValues({ ...values, error: '', open: true})
      }
      location.reload()
    })
  }



    return (
      <Paper className={classes.root} elevation={4}>
        <Typography variant="h6" className={classes.title}>

        Comments Page
        
   
        </Typography>

        <CardContent>
          <List dense>
            {comments.map((item, i) => {
                const created = new Date(item.created)
                const year = created.getFullYear();
                const month = created.getMonth();
                const day = created.getDate();
                const hours = created.getHours(); 
                const minutes = created.getMinutes(); 
                const seconds = created.getSeconds(); 
                
                const addZero = (num) => `${num}`.padStart(2, '0');
              
                const formatted =
                  year +
                  '-' +
                  addZero(month + 1) +
                  '-' +
                  addZero(day) +
                  ' ' +
                  addZero(hours) +
                  ':' +
                  addZero(minutes) +
                  ':' +
                  addZero(seconds);
                    return (
                      <Card className = {classes.commentsStyle}>
                        

                                Comment: <ListItemText primary={item.comments}/>
                               
                                Date Posted: <ListItemText primary={formatted}/>
                                <Button variant="contained" color="primary" size="medium" onClick={() => removeComment(item._id)}>Delete</Button>
                         
                                  
                      </Card>
                    )
                  })
            }
          </List>
        </CardContent>
      </Paper>
    )
}
