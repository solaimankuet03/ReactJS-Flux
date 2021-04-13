import React from 'react';
import {Route, Switch, Redirect }  from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoursesPageAsClassComponent from './CoursesPageAsClassComponent';
import Header from './common/Header';
import CoursesPageFunctionComponent from './CoursesPageFunctionComponent';
import NotFoundPage from './NotFoundPage';
import ManageCoursePage from './ManageCoursePage';

function App(){
    return(
        <div className="container-fluid">
            <Header></Header>
            <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/Courses" component={CoursesPageAsClassComponent}></Route>
            <Route path="/CoursesPageFunctionComponent" component={CoursesPageFunctionComponent}></Route>
            <Route path="/About" component={AboutPage}></Route>
            <Route path="/Course/:slug" component={ManageCoursePage}></Route>
            <Redirect from="/about-page" to="/about"></Redirect>
            <Route component={NotFoundPage}></Route>
            </Switch>
        </div>
    );
}

export default App;