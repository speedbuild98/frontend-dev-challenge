//Dependencies
import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__img">
        <img src={props.img} alt="img title" />
        <p className="post__img-p">{props.imgDescription}</p>
      </div>

      <h1 className="post__title">{props.title}</h1>

      <p className="post__p">
        {props.p}
        <p className="post__p-strong">{props.pStrong}</p>
        {props.p2}
      </p>
    </div>
  );
};

export default Post;
