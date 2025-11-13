import React from 'react'

export default function Alerta({tipo, mensaje}: {tipo: "rojo" | "amarillo", mensaje: string}) {
    const color = tipo === "rojo" ? "red" : "yellow";
  return (
    <div style={{ background: color, padding: "1rem", margin: "1rem 0"}}>{mensaje}</div> 
  )
}
