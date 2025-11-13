"use client";
import { createContext, ReactNode, useEffect, useState } from 'react';
import { Gasto } from '../modelos/Gasto';
import { getGastosAPI, agregarGastosAPI } from '../Utils/api';

interface GastoContextType{
    gastos: Gasto[];
    presupuesto: number;
    setPresupuesto: (valor: number) => void;
    agregarGasto: (gasto: Gasto) => void;
    porcentajeGastado: number
}

export const GastoContext = createContext<GastoContextType>({
    gastos: [],
    presupuesto: 0,
    setPresupuesto: () => {},
    agregarGasto: () => {},
    porcentajeGastado: 0

});

export const GastoProvider = ({ children }: {children: ReactNode}) => {
    const [ gastos, setGastos ] = useState<Gasto[]>([]);
    const [ presupuesto, setPresupuesto ] = useState<number>(0);

    const cargarGastos = async () => {
        const data = await getGastosAPI();
        setGastos(data);
    };

    const agregarGasto = async (gasto: Gasto) => {
        await agregarGasto(gasto);
        setGastos([...gastos, gasto]);
    }

    const totalGastado = gastos.reduce((acc, g) => acc + g.monto, 0);
    const porcentajeGastado = presupuesto ? (totalGastado / presupuesto) * 100 : 0;

    useEffect(() =>{
        cargarGastos();
    },[]);

    return (
        <GastoContext.Provider value={{ gastos, presupuesto, setPresupuesto, agregarGasto, porcentajeGastado}}>
            {children}
        </GastoContext.Provider>
    )
}