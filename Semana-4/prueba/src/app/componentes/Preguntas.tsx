import React, { useEffect, useState } from 'react'
import { useTriviaContext } from '../provider/TriviaProvider';
import { Pregunta } from '../modelos/Pregunta';

export default function Preguntas() {
    const { puntaje, incrementarPuntos, reiniciarJuego} = useTriviaContext();
    const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
    const [indice, setIndice] = useState<number>(0);
    const [seleccion, setSeleccion] = useState<boolean>();
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        const lista = [
            {
                idPregunta: 1,
                descripcionPregunta: "Messi es el jugador con mas balones de oro.",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 1,
            },
            {
                idPregunta: 2,
                descripcionPregunta : "Cristiano Ronaldo es el jugador con mas goles en la historia del futbol.",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 1
            },
            {
                idPregunta: 3,
                descripcionPregunta: "El Real Madrid es el club con mas UEFA CHAMPIONS LEAGUE.",
                opcionRespuesta1: false,
                opcionRespuesta2: true,
                respuestaCorrecta: true,
                puntajePregunta: 1

            },
            {
                idPregunta: 4,
                descripcionPregunta: "Olimpia es el club mas galardonado en Honduras.",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 1
            },
            {
                idPregunta: 5,
                descripcionPregunta: "Honduras de ha clasificado a 5 mundiales de la FIFA.",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: false,
                puntajePregunta: 1

            },
        ];
        setPreguntas(lista);
    },[]);

    function responder(opcion: boolean){
        const actual = preguntas[indice];
        setSeleccion(opcion);

        if(opcion === actual.respuestaCorrecta){

        }
    }



  return (
    <div>
      
    </div>
  )
}

