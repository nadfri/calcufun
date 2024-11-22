import './Home.scss';
import StartBtn from '@components/StartBtn/StartBtn';
import CheckBoxList from '@components/CheckboxList/CheckBoxList';

export default function Home() {
  return (
    <div className="Home">
      <CheckBoxList />

      <StartBtn />
    </div>
  );
}
