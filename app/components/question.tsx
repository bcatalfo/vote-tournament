export default function Question({
  questionName,
  editingQuestion,
}: {
  questionName: string;
  editingQuestion: boolean;
}) {
  return (
    <div className="flex flex-row items-stretch">
      <h1 className="text-xl p-4 font-bold">{questionName}</h1>
      <button className="p-1">Edit</button>
    </div>
  );
}
