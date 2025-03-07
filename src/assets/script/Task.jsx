import React from 'react'
import { useState } from 'react'
// const password = prompt('Enter a password with at least 8 characters, including uppercase, lowercase, numbers, and special characters');

// const validatePassword = (password) => {
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//   return passwordRegex.test(password);
// }

const Task = () => {

  const [name, setName] = useState('');
  
  return (
    <>
    <div>Task</div>
    <div>
      {/* {validatePassword(password)? 'Valid Password' : 'Invalid Password'} */}
    </div>
    <div className='h3'>
        Hi
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span>{name}</span>
      </div>
    </>
  )
}

export default Task