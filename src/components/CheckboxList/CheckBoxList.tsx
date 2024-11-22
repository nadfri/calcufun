import CheckBox from '@components/CheckBox/CheckBox';
import './CheckBoxList.scss';

export default function CheckBoxList() {
  return (
    <div className="CheckBoxList">
      {Array.from({ length: 12 }, (_, i) => (
        <CheckBox label={i + 2} key={i} />
      ))}
    </div>
  );
}
