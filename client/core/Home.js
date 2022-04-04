//import React from 'react'
import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import myImg from './../assets/images/myimage.png'
import {Link} from 'react-router-dom'
import {joke} from '../thirdparty/api-dadjokes.js'


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#ed3963'
    }
  }
}))

export default function Home(){
  const classes = useStyles()
  const [jokes, setJokes] = useState({
    joke: 'No joke',
    error: ''
  })

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    joke(signal).then((data) => {
      if (data && data.error) {
        //console.log("error in getting jokes: " + data.error)
        //setJokes(...jokes, error: data.error)
      } else {
        //console.log("Here is the user data: " + data)
        if (data != undefined){
          console.log("setting the data")
          setJokes(data)
        }
      }
    })

    return function cleanup(){
      abortController.abort()
    }
  }, [])



    return (
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Home Page
          </Typography>

          <Link to="/users"> Users </Link>
          <CardMedia className={classes.media} image={myImg} title="My Image"/>
          <Typography variant="body2" component="p" className={classes.credit} color="textSecondary">Photo: Chompster</Typography>
          <CardContent>
            <Typography variant="body1" component="p">
              Welcome to the Love-for-the-Uglies webpage. 
              Here we believe that all animals deserve attention and not just the cute ones. How can you not think that a naked mole rat is cuter than a kitten ??
              Please explore the site and sign up/Log in to experience the full use of the site. :)
              <hr></hr>
              <div>
              {jokes.joke}
              </div>



            </Typography>
          </CardContent>
        </Card>

      
    

    )
}
