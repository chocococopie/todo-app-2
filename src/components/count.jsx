import React from 'react'

function Count() {

    const count = 12 * 12;

  return (
    <div>
        <button onClick={count + 1}></button>
        <p>Count is {count}</p>
    </div>
  )
}

export default Count