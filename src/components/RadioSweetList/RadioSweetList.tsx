import RadioSweet from '@components/RadioSweet/RadioSweet';
import './RadioSweetList.scss';

export default function RadioSweetList() {
  return (
    <div className="RadioSweetList">
      {Array.from({ length: 12 }, (_, i) => (
        <RadioSweet label={i + 2} key={i} />
      ))}
    </div>
  );
}
