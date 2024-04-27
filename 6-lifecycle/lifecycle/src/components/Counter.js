import React from 'react'
import { useState, useEffect } from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Mehmet");

    useEffect(() => {
        console.log("Component mount edildi")

        const interval = setInterval(() =>{
            setNumber((n) => n+1)
        },1000);

        return () => clearInterval(interval);//unmount olma durumunda çalışır
    }, []);

    useEffect(() => {
        console.log("number State güncellendi")
    }, [number]);//sadece number state ni dinler

    useEffect(() => {
        console.log("name State güncellendi")
    }, [name]);//sadece name state ni dinler
  return (
      <div>
          <h1>{number}</h1>
          <button onClick={() => setNumber(number + 1)}>Click</button>

      </div>
  )
}

export default Counter