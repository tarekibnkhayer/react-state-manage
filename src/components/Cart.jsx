import PropTypes from 'prop-types';
const Cart = ({courseName}) => {
    return (
        <div className="w-1/4 border rounded-xl shadow-lg p-6 space-y-4">
            <h3 className="text-[#2F80ED] text-xl font-bold leading-8">Credit Hour Remaining: hr</h3>
            <hr />
            <h3 className="text-xl font-bold text-[#1C1B1B]">Course Name:</h3>
            <div>
               {
                courseName.map(course => <li key={course.id}>{course.course_name}</li>)
               }
            </div>
            <hr />
            <p className="text-[#1C1B1BCC] font-medium">Total Credit Hour: </p>
            <hr />
        </div>
    );
};

export default Cart;
Cart.propTypes ={
    courseName: PropTypes.array.isRequired
}