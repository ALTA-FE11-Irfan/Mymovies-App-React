import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "./Button";

interface CardProps {
  title?: string;
  image?: string;
  id?: number;
  labelFav?: JSX.Element;
  labelWatch?:  JSX.Element;
  onClickFav?: () => void;
}

const Card: FC<CardProps> = ({ id, image, title, labelFav, labelWatch, onClickFav }) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/movie/${id}`);
  }

  return (
    <div className="card card-compact bg-slate-200 dark:bg-neutral shadow-xl hover:scale-110 mx-1 my-3">
      <figure onClick={() => onClickDetail()}>
        <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
      </figure>
      <div className="card-body justify-between">
        <h2 className="text-black dark:text-white card-title justify-center text-center" onClick={() => onClickDetail()}>
          {title}
        </h2>
        <div className="card-actions w-full grid grid-cols-2">
          <Button label={labelFav} onClick={onClickFav} />
          <Button label={labelWatch} onClick={() => onClickDetail()} />
        </div>
      </div>
    </div>
  );
};

export default Card;
