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
        <h1 className="text-xl p-4 font-bold">{props.questionName}</h1>
        <button className="p-1" onClick={props.editCallback}>
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
    <div className="flex flex-col items-start">
      <h2 className="px-4 text-xl">Title</h2>
      <div className="flex flex-row items-stretch">
        <QuestionBody props={props}></QuestionBody>
      </div>
    </div>
  );
}
