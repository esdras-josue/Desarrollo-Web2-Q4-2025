"use client";
import React, { useEffect, useState } from "react";
import { text } from "stream/consumers";

export default function FormularioContador() {
  const [texto, setTexto] = useState<string>("");

  const [contadorLetras, setContadorLetras] = useState<number>(0);
  const [color, setColor] = useState<string>("");

  //escucha cuando el componente ha sido cargado
  useEffect(() => {
    console.log("El componente fue cargado");
  }, []);

  useEffect(() => {
    setContadorLetras(texto.length);

    if(texto.length < 10) {
        setColor("yellow");
    }
    else if(texto.length > 10 && texto.length < 50){
        setColor("green");
    }
    else{
        setColor("red");
    }

  }, [texto]);

  function manejarTexto(e: any): void {
    setTexto(e.target.value);
  }

  return (
    <div>
      <h1>Contador de palabras</h1>

      <textarea
        name=""
        id=""
        className="form-control"
        rows={10}
        cols={10}
        placeholder="ingresar texto"
        value={texto}
        onChange={manejarTexto}
        style={{ color: color }} 
      ></textarea>

      <h3>Cantidad de letras {contadorLetras}</h3>
    </div>
  );
}
