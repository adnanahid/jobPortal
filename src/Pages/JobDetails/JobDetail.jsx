import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetail = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>JobDetail</div>;
};

export default JobDetail;
