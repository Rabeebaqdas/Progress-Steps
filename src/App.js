import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const[count,setcount] = useState(1);
  const handleChange = () => {
    setcount(count+1);
  
      };
      const handleChange1 = () => {
        setcount(count-1);
      
          };
  return (
    <div className="container">

      <div className='progress-container'>
      <div className='progress' style={{width:`${count==2 ? "33.33%" : ''}`||`${count==3 ? "66.66%" : ''}`||`${count==4 ? "100%" : ''}`}} id='progress'></div>

      <div className='circle active'>1</div>
      <div className={`circle ${count > 1 ? "active" : ''} `}>2</div>
      <div className={`circle ${count > 2 ? "active" : ''} `}>3</div>
        <div className={`circle ${count > 3 ? "active" : ''} `}>4</div>
        </div>
        <button className='btn' id='prev'  onClick={handleChange1} disabled={count==1}>Prev</button>
        <button className='btn' id='next' onClick={handleChange} disabled={count==4}>Next</button>

    
    
    </div>
  );
}

export default App;
