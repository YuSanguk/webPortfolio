import React, { lazy } from "react";
import { Link } from "react-router-dom";

const Error = lazy(() => {
  return (
    <div>
      <div>여긴 아무것도 없어요.</div>
      <Link to="/">돌아가기</Link>
    </div>
  );
});

export default Error;
