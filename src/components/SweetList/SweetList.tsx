import { Sweet } from '@components/Sweet/Sweet';
import './SweetList.scss';

export function SweetList() {
  return (
    <div className="SweetList">
      <div className="grid">
        {Array.from({ length: 12 }, (_, i) => (
          <Sweet tableOf={i + 2} key={i} />
        ))}
      </div>
    </div>
  );
}
