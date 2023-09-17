
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import { useState } from 'react'
import Courses from './components/Courses';
import Cart from './components/Cart';


function App() {
  const [courses, setCourses] = useState([]);
  useEffect(()=>{
    fetch('courses.json')
    .then(res => res.json())
    .then(data => setCourses(data));
  },[]);
  return (
    <>
    <header><Header></Header></header>
    <main className='flex mx-16 mt-8 gap-6'>
      <Courses courses={courses}></Courses>
      <Cart></Cart>
    </main>
    </>
  )
}

export default App
