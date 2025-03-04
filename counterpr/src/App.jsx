import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

  let[counter, setCounter] = useState(15);

  return (
    <>
      <h1>Counter New hooks</h1>
      <h2>Counter Value {counter}</h2>


      <button onClick = {() => setCounter(counter + 1)}> Add Counter {counter}</button>
      <br/>
      <button onClick={() => setCounter(counter - 1)}>Remove Vlaue {counter}</button>
    </>
  )
}

export default App
