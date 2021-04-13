import React from "react";
import PropTypes from "prop-types";

function CourseList(props){

    return(
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
                    props.courses.map(course =>{
                        return( <tr>
                            <td>{course.title}</td>
                            <td>{course.authorId}</td>
                            <td>{course.category}</td>
                        </tr>);
                    })
                        
                    }
                </tbody>
            </table>
    );

}

CourseList.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        authorId:PropTypes.number.isRequired,
        category:PropTypes.string.isRequired
    })).isRequired
};



/*CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};*/
/*CourseList.defaultProps = {
    courses:[]
};*/

export default CourseList;