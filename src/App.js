import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  let [count,setCount]=useState(0)

 
  return (
    <div>
      <Navigation />

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +</button>
        <span>
          
          {count}
        </span>
      <button  onClick={()=>{setCount(count-1)}} disabled={count===0?true:false}>-</button>
     
    </div>
  );
}

export default App;
