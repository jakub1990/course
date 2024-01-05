import Header from './Header.jsx';
import Content from './Content.jsx';
import Total from './Total.jsx';

function App() {
  const course = {
  name: 'Half Stack application development'
}
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course.name}/>
      <Content part={parts[0].name} exercises={parts[0].exercises} />
      <Content part={parts[1].name} exercises={parts[1].exercises} />
      <Content part={parts[2].name} exercises={parts[2].exercises} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
    </div>
  )
}

export default App

