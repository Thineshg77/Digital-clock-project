import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
const [currenttime, setCurrenttime] = useState(new Date());
useEffect(() => {
    const timer = setInterval(() => {
      setCurrenttime(new Date());
    }, 1000);
    return () => clearInterval(timer);
},  []);
const ledzero =(num) => {
  return num < 10 ? `0${num}` : num;
};

const formattime =(hour) => {
  return hour === 0 ? 12 : hour > 12 ? hour -12 : hour;
};

const formatedate = (date) => {
  return date.toLocaleDateString();
}
  return (
    <>
    <div className="one">
    <div className="title">Digital Clock</div>
      <div className="container">
        
        <div className="time">
          {ledzero(formattime(currenttime.getHours()))} :
          {ledzero(currenttime.getMinutes())} :
          {ledzero(currenttime.getSeconds())}
          {currenttime.getHours() >= 12 ?  " PM" : " AM" }
        </div>
        <div className="date">{formatedate(currenttime)}</div>
      </div>
      </div>
      <div className="credit">Designed by <span>THINESH</span></div>
    </>
  )
}

export default App
