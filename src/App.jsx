
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import { useState } from 'react'
import Courses from './components/Courses';
import Cart from './components/Cart';


function App() {
  const [courses, setCourses] = useState([]);
  const [courseName,setCourseName ] = useState([])
  useEffect(()=>{
    fetch('courses.json')
    .then(res => res.json())
    .then(data => setCourses(data));
  },[]);
  const handleAddToCart = (course) =>{
    const isExist = courseName.find(item => item == course);
    if (isExist){
      return alert("you can't add same course twice");
    }
    else{
      return setCourseName([...courseName, course]);
    }

  }
  return (
    <>
    <header><Header></Header></header>
    <main className='flex mx-16 mt-8 gap-6'>
      <Courses courses={courses} handleAddToCart={handleAddToCart}></Courses>
      <Cart courseName={courseName}></Cart>
    </main>
    </>
  )
}

export default App
