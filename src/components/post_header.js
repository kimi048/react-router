import React from 'react';
import { withRouter } from "react-router";

const PostsHeader = (props) => {
  console.log("from header");
  console.log(props);
  return (
    <div>PostHeader</div>
  )
}

export default withRouter(PostsHeader);