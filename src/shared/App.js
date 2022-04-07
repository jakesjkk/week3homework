/*eslint-disable */
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import {ConnectedRouter} from "connected-react-router"
import { history } from "../redux/configureStore";

//pages
import PostList from "../pages/PostList";
import Login from "../pages/Login"
import SignUp from "../pages/SignUp";

//componets
import Post from "../components/Post";
import Header from "../components/Header";

//elements
import {Grid} from '../elements';

function App() {
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
            <Route path="/" exact component={PostList}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/signup" exact component={SignUp}></Route>
        </ConnectedRouter>
      </Grid>  
    </React.Fragment>
  );
}

export default App;
