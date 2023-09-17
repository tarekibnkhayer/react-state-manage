import PropTypes from 'prop-types';
const Course = ({course}) => {
    const{course_name, img, description, price, credit_hour} = course;
    return (
        <div>
           <img src={img} alt="" />
           <h3>{course_name}</h3>
           <p>{description}</p>
           <div className='flex'>
            <p>$ Price: {price}</p>
            <div className='flex'>
                <p>Credit: {credit_hour}hr</p>
            </div>
           </div>
           <button>Select</button>
        </div>
    );
};

export default Course;
Course.propTypes = {
    course: PropTypes.object.isRequired
}