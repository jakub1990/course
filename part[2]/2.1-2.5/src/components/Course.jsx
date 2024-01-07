
import React from "react";
const Course = ({course, index}) => {
    return (
    <>   
    <h1>{course[index].name}</h1>
      <ul>
        {
          course[index].parts.map(single => {
            return (
                <li key={single.id}>{single.name} {single.exercises && <span>{single.exercises}</span>}</li>
            )
          }
        )}
      </ul>
    </>
  )
}

export default Course;