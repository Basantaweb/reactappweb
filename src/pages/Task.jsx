import React from 'react'
import { useState } from 'react'
import Tasks from '../assets/script/Tasks.jsx'
import Calculator from '../assets/script/Calculator.jsx';

function Task() {
    const [ count, setCount ] = useState(0);
  return (
    <>
    <div>Task</div>
    <div className="flex flex-col items-center space-y-4 p-6">
            <h1 className="text-2xl font-bold">Count: {count}</h1>
            <div className="flex space-x-4">
                <button 
                className="px-4 py-2 bg-blue-500 text-dark rounded-lg"
                onClick={() => setCount(count + 1)}
                >
                Increment
                </button>
                <button 
                className="px-4 py-2 bg-red-500 text-dark rounded-lg"
                onClick={() => setCount(count - 1)}
                >
                Decrement
                </button>
                <button 
                className="px-4 py-2 bg-gray-500 text-dark rounded-lg"
                onClick={() => setCount(0)}
                >
                Reset
                </button>
            </div>
        </div>
    <Tasks />
    <Calculator />
    </>
  )
}

export default Task