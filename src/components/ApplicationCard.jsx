import StatusBadge from './StatusBadge';

export default function ApplicationCard({ application }) {
  const { company, role, status, appliedOn, source, url, notes } = application;

  return (
    <li className="job-card">
      <div className="grow">
        <h3>
          {url ? <a href={url} target="_blank" rel="noreferrer">{role}</a> : role}
        </h3>
        <div className="company">{company}</div>
        <div className="meta">
          Applied {appliedOn}
          {source && <> · via {source}</>}
        </div>
        {notes && <p className="note">{notes}</p>}
      </div>
      <StatusBadge status={status} />
    </li>
  );
}