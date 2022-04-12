import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Menu from './core/Menu'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import PrivateRoute from './auth/PrivateRoute'
import Profile from './user/Profile'
import EditProfile from './user/EditProfile'
import UserAdmin from './user/UsersAdmin'
import Game from './game/Game'
import Events from './user/Events'
import Comments from './user/Comments'
import CommentsCreate from './user/CommentsCreate'
import EventsCreate from './user/EventsCreate'
import App from './App'


const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/game" component={Game}/>
        <Route path="/events" component={Events}/>
        <Route path="/commentsCreate" component={CommentsCreate}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
        <Route path="/useradmin/:userId" component={UserAdmin}/>
        <Route path="/comments" component={Comments}/>
        <Route path="/eventsCreate" component={EventsCreate}/>

      </Switch>
    </div>)
}

export default MainRouter
