"use client";
import React, { useContext } from 'react'
import { GastoContext } from '../context/GastoContext'

export default function ListaGastos() {
    const { gastos } = useContext(GastoContext);

  return (
    <div>
      <h2>Gastos Registrados</h2>
      <ul>
        {gastos.map((g,idx) =>(
            <li key={idx}>{g.fecha}- {g.categoria} - ${g.monto} - {g.descripcion}</li>
        ))}
      </ul>
    </div>
  )
}
