import { Gasto } from "../modelos/Gasto";

const URL = "http://localhost:5000/gastos";

export const getGastosAPI = async () => {
    const res = await fetch(URL);
    return res.json();
};

export const agregarGastosAPI = async (gasto: Gasto) => {
    await fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "aplication/json"},
        body: JSON.stringify(gasto)
    });
};