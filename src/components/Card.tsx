import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonFav, ButtonWatch } from "./Button";

interface CardProps {
  title?: string;
  image?: string;
  id?: number;
  labelFav?: string;
  labelWatch?: string;
  onClickFav?: () => void;
}

const Card: FC<CardProps> = ({ id, image, title, labelFav, labelWatch, onClickFav }) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/movie/${id}`);
  }

  return (
    <div className="card card-compact bg-neutral hover:scale-110 mx-1 my-3">
      <figure onClick={() => onClickDetail()}>
        <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
      </figure>
      <div className="card-body justify-between">
        <h2 className="card-title justify-center text-center" onClick={() => onClickDetail()}>
          {title}
        </h2>
        <div className="card-actions w-full grid grid-cols-2">
          <ButtonFav label={labelFav} onClick={onClickFav} />
          <ButtonWatch label={labelWatch} onClick={() => onClickDetail()} />
        </div>
      </div>
    </div>
  );
};

export default Card;
