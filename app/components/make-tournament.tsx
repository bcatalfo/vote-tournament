import { useState } from "react";
import Candidate from "./candidate";
import { bandNamesData } from "./data";

var nextId = bandNamesData.length + 1;

export default function MakeTournament() {
  const [candidateData, setCandidateData] = useState(bandNamesData);
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
      <div className="grid grid-cols-1 gap-4 items-center py-4">
        {candidateData.toReversed().map((candidate) => (
          <Candidate
            name={candidate.name}
            key={candidate.id}
            deleteCallback={() =>
              setCandidateData(
                candidateData.filter(({ name, id }) => id != candidate.id)
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
