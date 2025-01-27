export default function Candidate({ name, id }: { name: string; id: string }) {
  return (
    <li key={id}>
      <p>
        <b>{name}</b>
      </p>
    </li>
  );
}
