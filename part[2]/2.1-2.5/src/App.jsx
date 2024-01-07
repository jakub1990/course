import { ReactDOM } from "react-dom";
import React from "react";
import Note from './components/Note'
import Course from './components/Course'
import { useState } from "react";

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  const coursesAmount = (i)  => course[i].parts.reduce((sum, c) =>  sum + c.exercises, 0)
 console.log(coursesAmount);
  return (
  <>
  <Course course={course} index={0}/>
  <p>total of exercises: {coursesAmount(0)}</p>
  <Course course={course} index={1} />
      <p>total of exercises: {coursesAmount(1)}</p>
  </>
  )
}

export default App