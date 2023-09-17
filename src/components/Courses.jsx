import PropTypes from 'prop-types';
const Courses = ({courses}) => {
    return (
        <div>
            {courses.length}
        </div>
    );
};

export default Courses;
Courses.propTypes ={
    courses: PropTypes.array.isRequired
}
