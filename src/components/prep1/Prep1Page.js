import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import { useParams } from "react-router";

const Prip1Page = () => {
  const parm = useParams();
  return (
    <>
      <Dashboard props={"prep1"} parm={parm} />
    </>
  );
};

export default Prip1Page;
