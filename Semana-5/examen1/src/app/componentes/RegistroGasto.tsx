"use client";
import React, { useContext, useState } from 'react'
import { GastoContext } from '../context/GastoContext'
import { Gasto } from '../modelos/Gasto';

export default function RegistroGasto() {
    const {agregarGasto} = useContext(GastoContext);
    const [gasto, setGasto] = useState<Gasto>({ categoria: "", monto:0, fecha: "", descripcion: ""});

    const handleAgregar = () =>{
        agregarGasto(gasto);
        setGasto({ categoria: "", monto: 0, fecha: "", descripcion: ""});
    };

  return (
    <div>
      <h2>Agregar Gasto</h2>
      <input placeholder='Categoria' value={gasto.categoria} onChange={e => setGasto({...gasto, categoria: e.target.value })} />
      <input placeholder='Monto' type="number" value={gasto.monto} onChange={e => setGasto({...gasto, monto:Number(e.target.value)})} />
      <input placeholder='Descripcion' value={gasto.descripcion} onChange={e =>setGasto({ ...gasto, descripcion: e.target.value})} />
      <input placeholder='Fecha' type='date' value={gasto.fecha} onChange={e => setGasto({...gasto,fecha: e.target.value})} />
      <button onClick={handleAgregar}>Agregar</button>
    </div>
  );
}
