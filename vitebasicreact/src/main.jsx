import { createElement, StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import React from 'react';


function Myapp(){
  return(
    <h1>
      click vite code is here
    </h1>
  )
}


const ReactElement =  {
  type:'a',
  props:{
     href:'https://google.com',
     target:'_blank'   
  },
  children:'click me to  visit google'
}

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Another Element
    </a>
)

 const anotherUser ="Priya"



const reactElement = React.createElement(
  'a',
  { href: 'https://google.com' },
  'Click here to visit',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
 
reactElement
)
