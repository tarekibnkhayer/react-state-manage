import PropTypes from 'prop-types';
import Course from './Course';
const Courses = ({courses}) => {
    return (
        <div className='w-3/4'>
            {
                courses.map(course =><Course course={course} key={course.id}></Course> )
            }
        </div>
    );
};

export default Courses;
Courses.propTypes ={
    courses: PropTypes.array.isRequired
}
