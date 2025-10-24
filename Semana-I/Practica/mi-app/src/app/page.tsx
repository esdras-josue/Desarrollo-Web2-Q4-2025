'use client';
import Count from "./components/Count";
import { Person } from "./models/Person";
import PresentationCard from "./components/PresentationCard";

let Persona : Person = {
  fullName: "Esdras",
  age: 26,
  country: "Honduras"
}

let name:string = 'Esdras';
let age: number = 26;
let country: string = 'Honduras'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <Count/>

      <PresentationCard 
        fullName ={Persona.fullName} 
        age ={Persona.age} 
        country={Persona.country}

         />
      </main>
    </div>
  );
}
