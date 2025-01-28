import { useState } from "react";
import Candidate from "./candidate";
import { bandNamesData } from "./data";

export default function MakeTournament() {
  const [candidateData, setCandidateData] = useState(bandNamesData);
  var nextId = candidateData.length + 1;
  return (
    <div className="container mx-auto my-auto text-center flex flex-col items-center">
      <div className="flex flex-row items-stretch">
        <h1 className="text-xl p-4 font-bold">What to name our band?</h1>
        <button className="p-1">Edit</button>
      </div>
      <div className="w-1/4 flex py-4">
        <input
          type="text"
          className="border-2 border-slate-200 rounded-md p-2 my-4 w-full"
          placeholder="Type your suggestion here..."
        />
        <button
          className="p-2"
          onClick={() =>
            setCandidateData([
              ...candidateData,
              { id: nextId++, name: "new thing!" },
            ])
          }
        >
          Add
        </button>
      </div>
      <div className="flex flex-col items-center py-4">
        <ul>
          {candidateData.toReversed().map((candidate) => (
            <Candidate name={candidate.name} id={candidate.id.toString()} />
          ))}
        </ul>
      </div>
    </div>
  );
}
