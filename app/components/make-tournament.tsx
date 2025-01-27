import Candidate from "./candidate";
import { bandNamesData } from "./data";

export default function MakeTournament() {
  return (
    <div className="container mx-auto my-auto text-center flex flex-col items-center">
      <h1 className="text-xl p-4 font-bold">What to name our band?</h1>
      <div className="w-1/4 flex py-4">
        <input
          type="text"
          className="border-2 border-slate-200 rounded-md p-2 my-4 w-full"
          placeholder="Type your suggestion here..."
        />
        <button className="p-2"> Add </button>
      </div>
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
