import React from 'react';
import {Route, Router, Redirect} from 'react-router';
import {createBrowserHistory} from 'history';
import SseEditorApp from "../imports/editor/SseEditorApp.jsx";

const browserHistory = createBrowserHistory();
export const renderRoutes = () => (
    // <Router history={browserHistory}>
    //     <div>
    //         <Route exact path="/" render={()=>(<Redirect to="/browse/0/20/"/>)}/>
    //         <Route path="/edit/:id/image/:name/" component={SseEditorApp}/>
    //         <Route exact path="/edit/" render={()=>(<Redirect to="/browse/0/20/"/>)}/>
    //         <Route exact path="/edit" render={()=>(<Redirect to="/browse/0/20/"/>)}/>
    //         <Route path="/browse/:fromIndex/:pageLength/:path?" component={SseNavigatorApp}/>
    //         <Route path="/annotated" component={SseAllAnnotated}/>
    //     </div>
    // </Router>

    <SseEditorApp/>
);