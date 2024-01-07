
import React from "react";

const Course = ({course}) => {
    return (
    <>   
    <h1>{course.name}</h1>
      <ul>
        {
        course.parts.map(single => {
        return (
            <li key={single.id}>{single.name} {single.excercises && <span>{single.exercises}</span>}</li>
          )}
        )}
    </ul>
    </>
  )
}

export default Course;