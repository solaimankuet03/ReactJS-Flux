import React, { useState, useEffect } from 'react';
import { getCourses } from '../api/courseApi'
import CourseList from './CourseList'

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
            <CourseList courses={courses}></CourseList>
            </React.Fragment>
        );
    
}

export default CoursesPageFunctionComponent;