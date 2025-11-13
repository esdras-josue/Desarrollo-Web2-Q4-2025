"use client";
import React, { useContext } from 'react'
import { GastoContext } from '../context/GastoContext'
import Presupuesto  from '../componentes/Presupuesto'
import RegistroGasto from '../componentes/RegistroGasto';
import ListaGastos from '../componentes/ListaGastos';
import Alerta from '../componentes/Alerta';

export default function Dashboard() {
    const { porcentajeGastado } = useContext(GastoContext);
  return (
    <div style={{ padding: "2rem"}}>
        <h1>Administrador de Gastos</h1>
        <Presupuesto />
        {porcentajeGastado >= 80 && porcentajeGastado < 100 && <Alerta tipo="amarillo" mensaje="Has alcanzado el 80% de tu presupuesto" />}
        {porcentajeGastado >= 100 && <Alerta tipo="rojo" mensaje="Has superado el limite del presupuesto, debes ajustar gastos" />}
        <RegistroGasto />
        <ListaGastos />
    </div>
  )
}
