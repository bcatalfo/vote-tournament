import Candidate from "./candidate";
import { bandNamesData } from "./data";

export default function MakeTournament() {
  return (
    <div className="container mx-auto my-auto py-4 text-center">
      <h1>What to name our band?</h1>
      <div className="flex flex-col items-center">
        <ul>
          {bandNamesData.map((candidate) => (
            <Candidate name={candidate.name} id={candidate.id.toString()} />
          ))}
        </ul>
      </div>
    </div>
  );
}
