import { baseURL, request } from "../../../services/axios-utils";
import { useMutation, useQuery } from "react-query";
//cust
import { Card } from "../../../components/shared/Card/card";
import { Spinner } from "../../../components/shared/Spinner";
import { useState } from "react";
import { Modal } from "../../../components/shared/Modal/modal";
import { Form } from "../../../components/shared/Form-builder/form-builder";
import { createPost, inputs } from "./constant";
import ImageUploader from "../../../components/shared/Inputs/upload-imge";
import { alertMsg } from "../../../utils/alert";
import axios from "axios";
import { addPost } from "../../../services/posts";
// import { Pagination } from "../../../components/shared/pagination/pagination";

const getPosts = (limit) => {
  return request({
    url: `/v1/post`,
    method: "GET",
  });
};

export const Posts = () => {
  const [fetchPosts, setFetchPosts] = useState(true);
  const query = useQuery("posts", getPosts, {
    refetchOnMount: false,
    refetchInterval: 2000,
    enabled: fetchPosts,
    onSuccess: () => {
      setFetchPosts(false);
    },
  });
  const mutatePost = useMutation(addPost, {
    onSuccess: (res) => {
      if (res.data.success) {
        toggleCreate(false);
        setFetchPosts(true);
        alertMsg("Post added Successfully", true);
      }
    },
  });

  const [create, toggleCreate] = useState(false);
  const [file, setFile] = useState();
  let cards = query?.data?.data?.data;
  cards = cards?.slice().reverse();

  const handleSubmit = (data) => {
    if (!file) {
      alertMsg("image is required", false);
    } else {
      mutatePost.mutate({ ...data, photo: file });
    }
  };
  return (
    <div className="container py-10">
      <Spinner loading={query.isLoading || mutatePost.isLoading} />

      <Modal
        isOpen={create}
        toggleModal={() => toggleCreate(false)}
        title="Create Post"
      >
        <ImageUploader setFile={setFile} />
        <Form inputs={inputs} schema={createPost} onSubmit={handleSubmit} />
      </Modal>

      <h2 className="text-6xl py-10 text-center">Latest post</h2>
      <div className="py-10 flex justify-center">
        <button className="btn btn-primary" onClick={() => toggleCreate(true)}>
          create post
        </button>
      </div>
      <div className="flex gap-4 flex-wrap justify-between ">
        {cards?.map((item) => (
          <div className="my-5 m-auto " key={item._id}>
            <Card
              link={"/post/" + item._id}
              title={item.title}
              content={item.content.slice(0, 110) + "..."}
              imagePost={item.photo[0]?.url}
              imageUser={item.user?.photo[0]?.url}
              date={item?.updatedAt}
              user={item?.user}
            />
          </div>
        ))}
      </div>
      {/* <div className="my-10 flex justify-center">
        <Pagination totalPages={Math.ceil(cards?.length / cardsPerPage)} />
      </div> */}
    </div>
  );
};
