import './Stars.scss';
import StarIcon from '@assets/icons/star.svg?react';

export function Stars({ numberOfStars }: { numberOfStars: number }) {
  return (
    <div className="Stars">
      {Array.from({ length: numberOfStars }).map((_, i) => (
        <StarIcon key={i} className="StarIcon" />
      ))}
    </div>
  );
}
