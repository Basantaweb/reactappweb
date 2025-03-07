import React from 'react'
import { useState } from 'react'

function Home() {
    const [ count, setCount ] = useState(0);
  return (
    <>
        <div>Home</div>
        <div className="flex flex-col items-center space-y-4 p-6">
            <h1 className="text-2xl font-bold">Count: {count}</h1>
            <div className="flex space-x-4">
                <button 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={() => setCount(count + 1)}
                >
                Increment
                </button>
                <button 
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={() => setCount(count - 1)}
                >
                Decrement
                </button>
                <button 
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                onClick={() => setCount(0)}
                >
                Reset
                </button>
            </div>
        </div>
    </>
  )
}

export default Home