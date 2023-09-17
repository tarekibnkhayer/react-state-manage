
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import { useState } from 'react'
import Courses from './components/Courses';


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
    <main>
      <Courses courses={courses}></Courses>
    </main>
    </>
  )
}

export default App
