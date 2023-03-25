import { useNavigate } from "react-router-dom";
import { alertMsg } from "../../../utils/alert";

export const Protected = ({ children }) => {
  const navigate = useNavigate();

  if (!localStorage.getItem("jwt")) {
    alertMsg("Unauthorized", false);
    navigate("/sign-in");
  }
  return <>{children}</>;
};
