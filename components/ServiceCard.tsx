type Props = { title: string; description: string; points: string[] };

export default function ServiceCard({ title, description, points }: Props) {
  return (
    <div className="card">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-slate-700 dark:text-slate-300">{description}</p>
      <ul className="mt-4 list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
        {points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}
