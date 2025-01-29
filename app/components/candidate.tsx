export default function Candidate({
  name,
  editMode,
  deleteCallback,
  editCallback,
  submitCallback,
}: {
  name: string;
  editMode: boolean;
  deleteCallback: () => void;
  editCallback: () => void;
  submitCallback: () => void;
}) {
  if (editMode) {
    return (
      <div className="border-2 rounded-md px-4 py-2">
        <p className="flex flex-row ">
          <input
            type="text"
            className="flex-grow px-4 py-2 border-2 border-slate-200 rounded-md p-2 mr-2"
            value={name}
            placeholder="The Bagooleans"
          />
          <button onClick={submitCallback} className="p-1">
            Submit
          </button>
        </p>
      </div>
    );
  }
  return (
    <div className="border-2 rounded-md px-4 py-2">
      <p className="flex flex-row ">
        <button className="p-1" onClick={deleteCallback}>
          X
        </button>
        <b className="flex-grow px-4 py-2">{name}</b>
        <button onClick={editCallback} className="p-1">
          Edit
        </button>
      </p>
    </div>
  );
}
