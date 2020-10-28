import React from 'react';
import {Switch, Route} from "react-router-dom"

import Home from './Pages/Home';
import Profile from './Pages/Profile';
import SignUp from './Pages/SignUp';


export default function Routes() {
    return (
        <Switch>
      <Route path='/SignUp' > <SignUp /> </Route>
      <Route path='/Profile' > <Profile /> </Route>
      <Route exact path='/'> <Home /> </Route>
    </Switch>

    )
}
