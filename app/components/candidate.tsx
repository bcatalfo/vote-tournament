export default function Candidate({ name, id }: { name: string; id: string }) {
  return (
    <div className="border rounded-sm p-4">
      <li key={id}>
        <p className="flex flex-row ">
          <button> X </button>
          <b>{name}</b>
          <button> Edit </button>
        </p>
      </li>
    </div>
  );
}
