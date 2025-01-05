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
      <div className="container mx-auto my-auto py-4">
        <h1>Vote Tournament</h1>
        <ul>{candidates}</ul>
      </div>
    </main>
  );
}
