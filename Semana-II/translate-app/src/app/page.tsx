import { useState, useEffect } from "react";

export default function Home() {

  const listWords = [
    {"es":"Casa","en":"House"},
    {"es":"Perro","en":"Dog"},
    {"es":"Comida","en":"Food"},
    {"es":"Papa","en":"Dad"},
    {"es":"Mama","en":"Mom"},
    {"es":"Carro","en":"Car"},
    {"es":"Computadora","en":"Computer"},
    {"es":"Desarrollador","en": "Developer"},
    {"es":"Estadio","en":"Stadium"},
    {"es":"Hermano","en":"Brother"}
  ]

  const [Languages, setLanguage] = useState<"es" | "en">("es");
  const [showList, setList] = useState<string[]>([]);

  useEffect(() =>{
    const list = listWords.map(word => word[Languages]);
    setList(list);
  },[Languages])

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

      </main>
    </div>
  );
}
