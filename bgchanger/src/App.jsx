import { useState } from "react"


function App() {

  const[color ,setColor] = useState('olive');


  return (
    <>
     <div className="w-full h-screen duration-200 text-center justify-center flex items-center"
      style={{backgroundColor : color}}
     >
      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
          <button onClick={() => setColor('red')}
          className="outline-none p-4 rounded-2xl text-white"
          style={{backgroundColor:"red"}}
          >Red</button>
          <button onClick={() => setColor('green')}
           className="outline-none p-4 rounded-2xl text-white"
          style={{backgroundColor:"green"}}
          >Green</button>
          <button onClick={() => setColor('blue')}
           className="outline-none p-4 rounded-2xl text-white"
          style={{backgroundColor:"blue"}}
          >blue</button>
          <button onClick={() => setColor('pink')}
           className="outline-none p-4 rounded-2xl text-dark"
          style={{backgroundColor:"pink"}}
          >blue</button>
          <button onClick={() => setColor('yellow')}
           className="outline-none p-4 rounded-2xl text-dark"
          style={{backgroundColor:"yellow"}}
          >blue</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
