import React from 'react';
import { getCourses } from '../api/courseApi'

class CoursesPage extends React.Component{
    /*constructor(props){
        super(props);
        this.state ={
            courses:[]
        };
    }*/
    /*another way*/
    state ={
        courses:[]
    };

    componentDidMount(){
        
        getCourses().then(courses => this.setState({ courses: courses }));
        
        /*getCourses().then((courses) => {this.setState({ courses: courses })}).catch(function (error) {
            console.log(error);
        })  ;*/
    }

    renderRow(course){
        return( <tr key={course.id}>
            <td>{course.title}</td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
        </tr>);
    }

    render(){
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
                    this.state.courses.map(course =>{
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
}

export default CoursesPage;