export default function Candidate({
  name,
  id,
  deleteCallback,
}: {
  name: string;
  id: number;
  deleteCallback: () => void;
}) {
  return (
    <div className="border-2 rounded-md p-4">
      <li key={id}>
        <p className="flex flex-row ">
          <button className="p-1" onClick={deleteCallback}>
            X
          </button>
          <b className="flex-grow p-4">{name}</b>
          <button className="p-1">Edit</button>
        </p>
      </li>
    </div>
  );
}
