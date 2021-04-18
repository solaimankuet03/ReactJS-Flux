import React from 'react';
import {Prompt} from 'react-router-dom';
class AboutPage extends React.Component{
    render(){
        return(
        <React.Fragment>
        <h1>About Page</h1>
        <Prompt when={true} message="Are you sure you want to leave?"></Prompt>
        <p>This is the about page</p>
        </React.Fragment>    
        );
    }
}

export default AboutPage;