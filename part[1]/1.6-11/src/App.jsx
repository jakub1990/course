import { useState } from 'react'
import Heading from './Heading';
import Button from './Button';
import Stat from './Stat';
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [mark, setMark] = useState(0)

  const setGoodFunc = () => {
    setGood(good + 1);
    setMark(mark + 1);
    setAll(all + 1);
  }

  const setNeutralFunc = () => {
    setNeutral(neutral + 1);
    setMark(mark + 0);
    setAll(all + 1);
  }

  const setBadFunc = () => {
    setBad(bad + 1);
    setMark(mark - 1)
    setAll(all + 1);
  }

  const average = () => Number(mark / all);

  const positive = () => Number(((good / all) * 100));



  return (
    <div>
      <Heading text="give feedback" />
      <Button onClick={setGoodFunc} text="good" />
      <Button onClick={setNeutralFunc} text="neutral" />
      <Button onClick={setBadFunc} text="bad" />
      <Heading text="statistics" />


      {
        all > 0 ? (
          <table>
            <tr>
              <td>
                <Stat text="good" value={good} />
              </td>
            </tr>
            <tr>
              <td>
                <Stat text="neutral" value={neutral} />
              </td>
            </tr>
            <tr>
              <td>
                <Stat text="bad" value={bad} />
              </td>
            </tr>
            <tr>
              <td>
                <Stat text="all" value={all} />
              </td>
            </tr>
            <tr>
              <td>
                <Stat text="average" value={average()} />
              </td>
            </tr>
            <tr>
              <td>
                <Stat text="positive" value={`${positive()} %`} />
              </td>
            </tr>
          </table>
        ) : (<p>No feedback given</p>)
      }
    </div>
  )
}

export default App
