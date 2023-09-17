import PropTypes from 'prop-types';
import Course from './Course';
const Courses = ({courses, handleAddToCart}) => {
    return (
        <div className='w-3/4 grid grid-cols-3 gap-6'>
            {
                courses.map(course =><Course course={course} handleAddToCart={handleAddToCart} key={course.id}></Course> )
            }
        </div>
    );
};

export default Courses;
Courses.propTypes ={
    courses: PropTypes.array.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}
