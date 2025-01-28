import type { ChangeEventHandler } from "react";

function QuestionBody({
  questionName,
  editingQuestion,
  editCallback,
  inputChangeCallback,
  submitCallback,
}: {
  questionName: string;
  editingQuestion: boolean;
  editCallback: () => void;
  inputChangeCallback: ChangeEventHandler<HTMLInputElement>;
  submitCallback: () => void;
}) {
  if (!editingQuestion) {
    return (
      <>
        <h1 className="text-xl p-4 font-bold">{questionName}</h1>
        <button className="p-1" onClick={editCallback}>
          Edit
        </button>
      </>
    );
  }
  return (
    <>
      <input
        type="text"
        className="border-2 border-slate-200 rounded-md p-2 my-4 w-full"
        value={questionName}
        onChange={inputChangeCallback}
        placeholder="What to name our band?"
      />
      <button className="p-2" onClick={submitCallback}>
        Submit
      </button>
    </>
  );
}

export default function Question({
  questionName,
  editingQuestion,
  editCallback,
  inputChangeCallback,
  submitCallback,
}: {
  questionName: string;
  editingQuestion: boolean;
  editCallback: () => void;
  inputChangeCallback: ChangeEventHandler<HTMLInputElement>;
  submitCallback: () => void;
}) {
  return (
    <div className="flex flex-row items-stretch">
      <QuestionBody
        questionName={questionName}
        editingQuestion={editingQuestion}
        editCallback={editCallback}
        inputChangeCallback={inputChangeCallback}
        submitCallback={submitCallback}
      ></QuestionBody>
    </div>
  );
}
