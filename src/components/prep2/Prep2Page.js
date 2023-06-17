import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import { useParams } from "react-router";
const Prep2Page = () => {
  const parm = useParams();

  return (
    <div>
      <Dashboard props={"prep2"} parm={parm} />
    </div>
  );
};

export default Prep2Page;
