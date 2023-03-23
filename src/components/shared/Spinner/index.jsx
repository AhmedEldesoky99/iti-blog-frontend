import { CircleLoader } from "react-spinners";

export const Spinner = ({ loading }) => {
  return (
    <div className="abs z-top fixed">
      <CircleLoader color="#047AFF" loading={loading} size={100} />
    </div>
  );
};
