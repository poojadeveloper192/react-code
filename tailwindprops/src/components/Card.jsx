import React from 'react'

function Card({uname,desg="emp"}){

  return (
    <div className="max-w-xs  rounded-md shadow-md bg-black">
    <img
      src="https://images.pexels.com/photos/15881380/pexels-photo-15881380/free-photo-of-pretty-brunette-wearing-jacket-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
    />
    <div className="mt-6 mb-2 p-5">
      <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
        {uname}
      </span>
      <h2 className="text-xl font-semibold tracking-wide">{desg}</h2>
    </div>
    <p className="text-gray-300">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
      amet
    </p>
  </div>
  )
}

export default Card
