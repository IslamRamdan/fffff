import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import { useParams } from "react-router";

const Prep3Page = () => {
  const parm = useParams();

  return (
    <div>
      <Dashboard props={"prep3"} parm={parm} />
    </div>
  );
};

export default Prep3Page;
