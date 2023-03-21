import { Link } from "react-router-dom";

//assets
import User from "../../../assets/images/user.png";

export const Card = ({
  title,
  content,
  date,
  imageUser,
  imagePost,
  link,
  id,
}) => {
  return (
    <div className="card rounded-md overflow-hidden card-compact w-96 bg-base-100 shadow-xl">
      <figure className="relative overflow-visible">
        <img src={imagePost} alt="Shoes" />
        <div className="avatar cust-avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={imageUser ?? User} />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{date}</p>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <Link to={link} className="btn btn-primary">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};
