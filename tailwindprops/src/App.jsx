import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"jay",
    Age:22
  }
let array1= [1,2,3,4,5,];


  return (
    <>
      <h1 className='bg-green-600 text-black rounded-xl p-4 mb-4'>Tailwind css </h1>
      <Card uname="geet" desg = "manager"/>
      <Card uname="priya"  />
      <Card uname="kiyara"/>

    </>
  )
}

export default App
