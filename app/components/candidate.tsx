export default function Candidate({
  name,
  deleteCallback,
}: {
  name: string;
  deleteCallback: () => void;
}) {
  return (
    <div className="border-2 rounded-md p-4">
      <p className="flex flex-row ">
        <button className="p-1" onClick={deleteCallback}>
          X
        </button>
        <b className="flex-grow p-4">{name}</b>
        <button className="p-1">Edit</button>
      </p>
    </div>
  );
}
