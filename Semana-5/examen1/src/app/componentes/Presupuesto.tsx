"use client";
import React, { useContext, useState } from 'react'
import { GastoContext } from '../context/GastoContext'

export default function Presupuesto() {
    const { presupuesto, setPresupuesto } = useContext(GastoContext);
    const [valor, setValor ] = useState(0);

    const handleGuardar = () => {
        setPresupuesto(valor);
    }
  return (
    <div>
      <h2>Presupuesto Mensuala: {presupuesto}</h2>
      <input type="number" value={valor} onChange={e => setValor(Number(e.target.value))} />
      <button onClick={handleGuardar}>Guardar</button>
    </div>
  )
}
