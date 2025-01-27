export default function Candidate({ name, id }: { name: string; id: string }) {
  return (
    <div className="border rounded-sm p-4">
      <li key={id}>
        <p className="flex flex-row ">
          <button className="p-1"> X </button>
          <b className="flex-grow p-4">{name}</b>
          <button className="p-1"> Edit </button>
        </p>
      </li>
    </div>
  );
}
