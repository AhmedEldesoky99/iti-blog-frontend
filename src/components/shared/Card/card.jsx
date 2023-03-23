import { Link } from "react-router-dom";

//assets
import User from "../../../assets/images/user.png";
import Pic from "../../../assets/images/Background - Compressed.webp";

export const Card = ({
  title,
  content,
  date,
  imageUser,
  imagePost,
  link,
  user,
}) => {
  const dateObj = new Date();
  return (
    <div className="card rounded-md overflow-hidden card-compact w-96 bg-base-100 shadow-xl">
      <figure className="relative overflow-visible">
        <img src={imagePost ?? Pic} alt="Shoes" />
        <Link to={`/user/${user._id}`}>
          <div className="avatar cust-avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={imageUser ?? User} />
            </div>
          </div>
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <p>
          <Link to={`/user/${user._id}`}>created by : {user.username}</Link>
        </p>
        <p>last update: {dateObj.toDateString(date)}</p>

        <div className="card-actions justify-end">
          <Link to={link} className="btn btn-primary">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};
