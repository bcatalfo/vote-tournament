import type { ChangeEventHandler } from "react";

export type QuestionProps = {
  questionName: string;
  editingQuestion: boolean;
  editCallback: () => void;
  inputChangeCallback: ChangeEventHandler<HTMLInputElement>;
  submitCallback: () => void;
};

function QuestionBody({ props }: { props: QuestionProps }) {
  if (!props.editingQuestion) {
    return (
      <>
        <h1 className="text-xl font-bold flex-grow text-left py-4">
          {props.questionName}
        </h1>
        <button className="p-1 text-right" onClick={props.editCallback}>
          Edit
        </button>
      </>
    );
  }
  return (
    <>
      <input
        type="text"
        className="border-2 border-slate-200 rounded-md p-2 mr-2 w-full"
        value={props.questionName}
        onChange={props.inputChangeCallback}
        placeholder="What to name our band?"
      />
      <button className="p-2" onClick={props.submitCallback}>
        Submit
      </button>
    </>
  );
}

export default function Question({ props }: { props: QuestionProps }) {
  return (
    <div className="w-1/4 flex flex-col items-stretch px-4 py-2">
      <h2 className="px-4 my-2 text-2xl text-left">Tournament Name</h2>
      <div className="flex flex-row justify-stretch px-4">
        <QuestionBody props={props}></QuestionBody>
      </div>
    </div>
  );
}
