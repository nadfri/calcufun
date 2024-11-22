import './Home.scss';
import StartBtn from '@components/StartBtn/StartBtn';
import CheckBoxList from '@components/CheckboxList/CheckBoxList';
import Title from '@components/Title/Title';

export default function Home() {
  return (
    <div className="Home">
      <Title />
      <CheckBoxList />

      <StartBtn />
    </div>
  );
}
