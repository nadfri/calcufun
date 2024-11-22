import CheckBox from '@components/CheckBox/CheckBox';
import './Home.scss';

export default function Home() {
  return (
    <div className="Home">
      {Array.from({ length: 12 }, (_, i) => (
        <CheckBox label={i + 2} key={i} />
      ))}
    </div>
  );
}
