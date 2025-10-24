import { useEffect, useState } from "react";
import React from 'react'

let countDos = 0;
let incrementarDos = 0

export default function Count() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("El contador cambio a:", count);
    },[count])

  return (
    <div>
      <p>Contador: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count - 1)}>Restar</button>
      </div>
    </div>
  )
}

