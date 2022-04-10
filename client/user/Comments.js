import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {list} from './api-comments.js'


const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing(1),
    margin: theme.spacing(5)
  }),
  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  }
}))

export default function Comments() {
  const classes = useStyles()
  const [comments, setComments] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    list(signal).then((data) => {
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





    return (
      <Paper className={classes.root} elevation={4}>
        <Typography variant="h6" className={classes.title}>
         Comments Page
        </Typography>

        {comments.map((item, i) => {
          return <Link to={"/comments/" + item._id} key={i}>
                    <ListItem button>
                      <ListItemText primary={item.name}/>
                      <ListItemSecondaryAction>
                      <IconButton>
                          <ArrowForward/>
                      </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                 </Link>
               })
            }
      </Paper>
    )
}
