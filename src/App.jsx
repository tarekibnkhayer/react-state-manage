
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import { useState } from 'react'
import Courses from './components/Courses';
import Cart from './components/Cart';
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [courses, setCourses] = useState([]);
  const [courseName,setCourseName ] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(()=>{
    fetch('courses.json')
    .then(res => res.json())
    .then(data => setCourses(data));
  },[]);
  const handleAddToCart = (course, time) =>{
    const isExist = courseName.find(item => item == course);
    if (isExist){
      return toast("You can't added same course twice");
    }
    else{
      let newCount = count + time;
       if(newCount <= 20){
        setCourseName([...courseName, course]);
        setCount(newCount);
       }
       else{
        return toast("you can't add credit more than 20 hr")
       }
    }

  }
  return (
    <>
    <header><Header></Header></header>
    <main className='flex mx-16 mt-8 gap-6'>
      <Courses courses={courses} handleAddToCart={handleAddToCart}></Courses>
      <Cart courseName={courseName} count={count}></Cart>
    </main>
    </>
  )
}

export default App
