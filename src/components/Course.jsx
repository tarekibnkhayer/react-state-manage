import PropTypes from 'prop-types';
import { FaBookReader } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
const Course = ({course, handleAddToCart}) => {
    const{course_name, img, description, price, credit_hour} = course;
    return (
        <div className='border rounded-xl  p-4 space-y-4 '>
           <img src={img} alt="" />
           <h3 className='text-lg font-semibold'>{course_name}</h3>
           <p className='text-sm font-normal leading-6 text-[#1C1B1B99]'>{description}</p>
           <div className='flex gap-8'>
            <p><span className='mr-2 w-6 h-6'>$</span><span className='text-base font-medium text-[#1C1B1B99]'>Price: {price}</span></p>
            <div className='flex items-center gap-2'>
               <FaBookReader></FaBookReader>
                <p className='text-base font-medium text-[#1C1B1B99]'>Credit: {credit_hour}hr</p>
            </div>
           </div>
           <button className='bg-[#2F80ED] border rounded-lg w-full text-white py-2 px-[112px] text-center' onClick={() => handleAddToCart(course, credit_hour)}>Select</button>
           <ToastContainer />
        </div>
    );
};

export default Course;
Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}