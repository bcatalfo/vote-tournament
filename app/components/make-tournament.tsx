import { bandNamesData } from "./data";

export default function MakeTournament() {
  const bandNamesList = bandNamesData.map((candiate) => (
    <li key={candiate.id}>
      <p>
        <b>{candiate.name}</b>
      </p>
    </li>
  ));
  return (
    <div className="container mx-auto my-auto py-4 text-center">
      <h1>Vote Tournament</h1>
      <ul>{bandNamesList}</ul>
    </div>
  );
}
