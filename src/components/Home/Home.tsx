import './Home.scss';
import { SweetList } from '@components/SweetList/SweetList';
import Title from '@components/Title/Title';

export default function Home() {
  return (
    <div className="Home">
      <Title />
      <SweetList />
    </div>
  );
}
