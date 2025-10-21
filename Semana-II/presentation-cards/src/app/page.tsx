import PresentationCard from "./components/PresentationCard";
import { Person } from "./models/Person";

export default function Home() {
  const peopleList: Person[] = [
    {
      id: 1,
      fullName: "Josue Peña",
      Occupation: "Football Player",
      Country: "Honduras",
    },
    {
      id: 2,
      fullName: "Lif Peña",
      Occupation: "psychologist",
      Country: "Spain",
    },
    {
      id: 3,
      fullName: "Esther Peña",
      Occupation: "Chef",
      Country: "Honduras",
    },
    {
      id: 4,
      fullName: "Kevin Lopez",
      Occupation: "software engineer",
      Country: "Canada",
    },
    {
      id: 5,
      fullName: "Isaac Lopez",
      Occupation: "Football Manager",
      Country: "United State",
    },
  ];

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold mb-6">Presentation Cads</h1>
        {peopleList.map((person: Person) => (
          <PresentationCard
            key={person.id}
            id={person.id}
            fullName={person.fullName}
            Occupation={person.Occupation}
            Country={person.Country}
          />
        ))}
      </main>
    </div>
  );
}
