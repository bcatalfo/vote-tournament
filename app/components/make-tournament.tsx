import { useState } from "react";
import Candidate from "./candidate";
import Question from "./question";
import { bandNamesData } from "./data";
import type { QuestionProps } from "./question";

var nextId = bandNamesData.length + 1;

export default function MakeTournament() {
  const [candidateData, setCandidateData] = useState(bandNamesData);
  const [editingQuestion, setEditingQuestion] = useState(false);
  const [questionName, setQuestionName] = useState("What to name our band");
  const [suggestion, setSuggestion] = useState("The Bagooleans Cubed");

  let props: QuestionProps = {
    questionName: questionName,
    editingQuestion: editingQuestion,
    editCallback: () => setEditingQuestion(true),
    inputChangeCallback: (e) => setQuestionName(e.target.value),
    submitCallback: () => setEditingQuestion(false),
  };

  return (
    <div className="container mx-auto my-auto text-center flex flex-col items-center">
      <Question props={props}></Question>
      <div className="w-1/4 flex flex-col items-start px-4 py-2">
        <h2 className="px-4 my-2 text-2xl">Contenders</h2>
        <div className="flex px-4 w-full justify-stretch">
          <input
            type="text"
            className="border-2 border-slate-200 rounded-md p-2 mr-2 w-full"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="Add a contender..."
          />
          <button
            className="p-2"
            onClick={() =>
              setCandidateData([
                ...candidateData,
                { id: nextId++, name: suggestion },
              ])
            }
          >
            Add
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 items-center p-4">
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
    </div>
  );
}
