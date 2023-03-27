import { CircleLoader } from "react-spinners";

export const Spinner = ({ loading }) => {
  return (
    <div className="abs abs-30 z-top ">
      <CircleLoader color="#047AFF" loading={loading} size={100} />
    </div>
  );
};
