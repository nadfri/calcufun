import './Home.scss';
import StartBtn from '@components/StartBtn/StartBtn';
import { RadioSweetList } from '@components/RadioSweetList/RadioSweetList';
import Title from '@components/Title/Title';

export default function Home() {
  return (
    <div className="Home">
      <Title />
      <RadioSweetList />

      <StartBtn />
    </div>
  );
}
