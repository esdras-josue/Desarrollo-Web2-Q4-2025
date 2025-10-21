import type { Conversion } from "./modelo/Conversion.ts";
import "./App.css"

function conversorTemperatura(valor: number, unidad: string): Conversion[] {

  if(unidad === "Celcius") {
    return [
        { unidad: "Celcius", valor: valor},
        { unidad: "Fahrenheit", valor: (valor * 9) / 5 + 32 },
        { unidad: "Kelvin", valor: valor + 273.15 },
    ];
  }
  else if(unidad === "Fahrenheit") {
    return [
        { unidad: "Fahrenheit", valor: valor },
        { unidad: "Celcius", valor: ((valor - 32) * 5) / 9 },
        { unidad: "Kelvin", valor: ((valor - 32) * 5) / 9 + 273.15 }
    ]
  }
  else if(unidad === "Kelvin") {
    return [
        { unidad: "Kelvin", valor: valor },
        { unidad: "Celcius", valor: valor - 273.15 },
        { unidad: "Fahrenheit", valor: (valor - 273.15) * 9/5 + 32 }
    ]
  }
  else{
    return [];
  }

}

function App() {
  const temperaturaInicial = 25;
  const conversiones = conversorTemperatura(temperaturaInicial, "Celcius");
  return (
    <div className="container">  
      <h2>Conversión de Temperatura</h2>
      <ul>
        {conversiones.map((conversion) => (
          <li key={conversion.unidad}>
            {conversion.unidad}: {conversion.valor.toFixed(2)}
          </li>
        ))}
      </ul>
    </div> 
  )
}

export default App;
