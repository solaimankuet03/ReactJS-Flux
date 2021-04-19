import React, { useState, useEffect } from 'react';
//import { getCourses } from '../api/courseApi'
import courseStore from '../stores/courseStore';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import { loadCourses, deleteCourse } from '../actions/courseActions';

function CoursesPageFunctionComponent() {
    
    
    const [courses, setCourses] = useState(courseStore.getCourses());
    //componentDidMount replaced to useEffect at function component
    useEffect( () =>{
        //getCourses().then(coursesResponse => setCourses(coursesResponse));

        courseStore.addChangeListener(onChange);     
        if (courses.length === 0) loadCourses();
        return () => courseStore.removeChangeListener(onChange); // cleanup on unmount
    }, [courses.length])
    
    function onChange(){
        setCourses(courseStore.getCourses());
    }

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
            <Link className="btn btn-primary" to="/course">Add Course</Link>
            <CourseList courses={courses} deleteCourse={deleteCourse}></CourseList>
            </React.Fragment>
        );
    
}

export default CoursesPageFunctionComponent;