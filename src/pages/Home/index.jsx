import { useQuery } from "react-query";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { Header } from "../../container/Home/header/header";
import { Posts } from "../../container/Home/posts/posts";
import { request } from "../../services/axios-utils";
import { handleRes } from "../../utils/handle-res";

const getUserDate = (id) => {
  return request({ url: `/v1/user/profile/${id}`, method: "GET" });
};

const Home = () => {
  const userID = localStorage.getItem("userID");
  const userQuery = useQuery(["user-login", userID], () => getUserDate(userID));

  const user = handleRes(userQuery);
  const username = handleRes(userQuery)?.username;

  return (
    <div>
      <Navbar user={user} />
      <Header username={username} />
      <Posts />
      <Footer />
    </div>
  );
};

export default Home;
