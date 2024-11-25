import './Home.scss';
import { RadioSweetList } from '@components/RadioSweetList/RadioSweetList';
import Title from '@components/Title/Title';

export default function Home() {
  return (
    <div className="Home">
      <Title />
      <RadioSweetList />
    </div>
  );
}
