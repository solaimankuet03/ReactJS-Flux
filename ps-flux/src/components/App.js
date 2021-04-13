import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoursesPageAsClassComponent from './CoursesPageAsClassComponent';
import Header from './common/Header';
import CoursesPageFunctionComponent from './CoursesPageFunctionComponent';

function App(){

    function getPage(){
        const route = window.location.pathname;
        if(route === "/CoursesPageFunctionComponent")
            return <CoursesPageFunctionComponent></CoursesPageFunctionComponent>
        if(route === "/Courses")
            return <CoursesPageAsClassComponent></CoursesPageAsClassComponent>;
        if(route === "/About")
            return <AboutPage></AboutPage>;
        else
            return <HomePage></HomePage>;
    }

    return(
        <div className="container-fluid">
            <Header></Header>
            { getPage() }
        </div>
    );
}

export default App;