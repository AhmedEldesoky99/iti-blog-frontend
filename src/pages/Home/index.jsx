import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { Header } from "../../container/Home/header/header";
import { Posts } from "../../container/Home/posts/posts";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Posts />
      <Footer />
    </div>
  );
};

export default Home;
