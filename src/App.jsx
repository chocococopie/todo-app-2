import { useState, useEffect } from 'react'
import './App.css'
import Double from './components/Hello'

function App() {


const [count, setCount] = useState(() => {
  const saved = localStorage.getItem('count');
  return saved !== null ? Number(saved) : 0;
});

useEffect(()=>{
  localStorage.setItem('count', count)
}, [count]);

  const doubled = Double(count)

  return (
    <>
    <p>Count: {count}</p>
    <p>Doubled: {doubled}</p>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => {setCount(count > 0 ? count -1 : 0)}}>-</button>
    <button onClick={() => {setCount(0); localStorage.removeItem('count')}}>Reset</button>
    </>
  )
}

export default App
