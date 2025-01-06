export function Welcome() {
  const data = [
    {
      name: "Third Space",
      id: 1,
    },
    {
      name: "Rum Punches",
      id: 2,
    },
    {
      name: "Sam and the Mumblos",
      id: 3,
    },
    {
      name: "Sam and the Martians",
      id: 4,
    },
    {
      name: "Mythical Island",
      id: 5,
    },
    {
      name: "Magical Journey",
      id: 6,
    },
    {
      name: "Common Area",
      id: 7,
    },
    {
      name: "The Martians",
      id: 8,
    },
    {
      name: "The Mumblos",
      id: 9,
    },
    {
      name: "Fruitless Pursuit",
      id: 10,
    },
    {
      name: "Genetic Apex: Charizard",
      id: 11,
    },
  ];
  const candidates = data.map((candiate) => (
    <li key={candiate.id}>
      <p>
        <b>{candiate.name}</b>
      </p>
    </li>
  ));
  return (
    <main>
      <div className="container mx-auto my-auto py-4 text-center">
        <h1>Vote Tournament</h1>
        <ul>{candidates}</ul>
      </div>
    </main>
  );
}
