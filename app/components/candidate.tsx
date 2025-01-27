export default function Candidate({ name, id }: { name: string; id: string }) {
  return (
    <div className="border rounded-sm">
      <li key={id}>
        <p>
          <b>{name}</b>
        </p>
      </li>
    </div>
  );
}
