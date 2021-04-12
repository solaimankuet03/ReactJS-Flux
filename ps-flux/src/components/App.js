import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';

function App(){

    function getPage(){
        const route = window.location.pathname;

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