import { STATUS_LABELS } from '../statuses';

export default function SummaryStrip({ applications }) {
  return (
    <div className="summary-strip">
      <span>Total: {applications.length}</span>
      {Object.keys(STATUS_LABELS).map((status) => (
        <span key={status}>
          {STATUS_LABELS[status]}:{' '}
          {applications.filter((app) => app.status === status).length}
        </span>
      ))}
    </div>
  );
}