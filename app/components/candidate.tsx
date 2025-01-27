export default function Candidate({ name, id }: { name: string; id: string }) {
  return (
    <div className="border rounded-sm p-4">
      <li key={id}>
        <p>
          <b>{name}</b>
          <button> Edit </button>
          <button> X </button>
        </p>
      </li>
    </div>
  );
}
