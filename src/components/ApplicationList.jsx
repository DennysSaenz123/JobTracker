import ApplicationCard from './ApplicationCard';

export default function ApplicationList({ applications }) {
  const sorted = [...applications].sort((a, b) =>
    b.appliedOn.localeCompare(a.appliedOn)
  );

  return (
    <ul className="job-list">
      {sorted.map((app) => (
        <ApplicationCard key={app.id} application={app} />
      ))}
    </ul>
  );
}