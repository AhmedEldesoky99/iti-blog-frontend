import { Card } from "../../../components/shared/Card/card";
//cust
import { Pagination } from "../../../components/shared/pagination/pagination";

//temp
import Pic from "../../../assets/images/Background - Compressed.webp";

export const Posts = () => {
  return (
    <div className="container py-10">
      <h2 className="text-6xl py-10 text-center">Latest post</h2>
      <div className="py-10 flex justify-center">
        <button className="btn">create post</button>
      </div>
      <div className="flex gap-4 flex-wrap justify-between ">
        {data.map((item, key) => (
          <div className="my-5 m-auto ">
            <Card
              link={"/posts/" + (key + 1)}
              title={item.title}
              content={item.content}
              imagePost={item.post_image}
              imageUser={item.user_image}
              date={item.date}
            />
          </div>
        ))}
      </div>
      <div className="my-10 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

const data = [
  {
    title: "React",
    content: "bla bla bla",
    data: "10-10-2015",
    post_image: Pic,
    post_link: "posts",
    user_link: "user",
    user_image: Pic,
  },
  {
    title: "React",
    content: "bla bla bla",
    data: "10-10-2015",
    post_image: Pic,
    post_link: "posts",
    user_link: "user",
    // user_image: Pic,
  },
  {
    title: "React",
    content: "bla bla bla",
    data: "10-10-2015",
    post_image: Pic,
    post_link: "posts",
    user_link: "user",
    user_image: Pic,
  },
  {
    title: "React",
    content: "bla bla bla",
    data: "10-10-2015",
    post_image: Pic,
    post_link: "posts",
    user_link: "user",
    user_image: Pic,
  },
  {
    title: "React",
    content: "bla bla bla",
    data: "10-10-2015",
    post_image: Pic,
    post_link: "posts",
    user_link: "user",
    user_image: Pic,
  },
  {
    title: "React",
    content: "bla bla bla",
    data: "10-10-2015",
    post_image: Pic,
    post_link: "posts",
    user_link: "user",
    user_image: Pic,
  },
  {
    title: "React",
    content: "bla bla bla",
    data: "10-10-2015",
    post_image: Pic,
    post_link: "posts",
    user_link: "user",
    user_image: Pic,
  },
  {
    title: "React",
    content: "bla bla bla",
    data: "10-10-2015",
    post_image: Pic,
    post_link: "posts",
    user_link: "user",
    user_image: Pic,
  },
  {
    title: "React",
    content: "bla bla bla",
    data: "10-10-2015",
    post_image: Pic,
    post_link: "posts",
    user_link: "user",
    user_image: Pic,
  },
];
