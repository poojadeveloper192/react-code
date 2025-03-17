import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed]= useState(false);
  const [charAllowed, setCharAllowed]= useState(false);
  const [password, setPassword]= useState("");

//ref hook
const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_=+|[]{};:/?.>"; 
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass); 
  } , [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select() 
    passwordRef.current?.setSelectionRange(0, 5)
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect (() => {
    passwordGenerator()
   },[length, numberAllowed, charAllowed, passwordGenerator])
     

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-3 my-8 text-orange-500 bg-gray-700">
        <h1 className='text-white text-2xl py-3 text-center'>Passwor generator</h1>
        <div className='flex shadow overflow-hidden rounded-xl mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none py-3 px-3 w-full'
          placeholder = "password"
          readOnly
          ref={passwordRef}
          />
          <button onClick = {copyPasswordToClipboard}
          className='bg-blue-600 text-white p-4'>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
            <div className="flex text-sm gap-x-1">
                <input 
                type="range"
                min={6}
                max={50}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {setLength(e.target.value)}}
                />
                <label>Length {length}</label>
            </div>
            <div className="flex text-sm gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange ={() => {setNumberAllowed ((prev) => !prev);}}
              />
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className="flex text-sm gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange ={() => {setCharAllowed((prev) => !prev);}}
              />
              <label htmlFor="characterInput">Character</label>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
