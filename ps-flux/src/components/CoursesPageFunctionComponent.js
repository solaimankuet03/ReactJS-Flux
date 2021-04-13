import React, { useState, useEffect } from 'react';
import { getCourses } from '../api/courseApi'

function CoursesPageFunctionComponent() {
    
    
    const [courses, setCourses] = useState([]);
    //componentDidMount replaced to useEffect at function component
    useEffect( () =>{
        getCourses().then(coursesResponse => setCourses(coursesResponse));
    }, [])
    

    /*const renderRow = (course) =>{
        return( <tr key={course.id}>
            <td>{course.title}</td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
        </tr>);
    };*/

    
        return(
            <React.Fragment>
            <h2>Courses</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author ID</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                    //this.state.courses.map(this.renderRow)
                    courses.map(course =>{
                        return( <tr>
                            <td>{course.title}</td>
                            <td>{course.authorId}</td>
                            <td>{course.category}</td>
                        </tr>);
                    })
                        
                    }
                </tbody>
            </table>
            </React.Fragment>
        );
    
}

export default CoursesPageFunctionComponent;