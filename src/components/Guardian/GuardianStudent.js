import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const GuardianStudent = () => {
  const [data, setdata] = useState({});
  const [dgree, setdgree] = useState([]);
  const parm = useParams();

  useEffect(() => {
    fetch(
      "https://data-app-d9rt.onrender.com/users" + parm.prep + "/" + parm.id
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setdata(data);
        setdgree(data.examDegree);
      });
  }, [parm.id, parm.prep]);

  return (
    <section>
      <div className="container">
        <div className="quiz-app">
          <div style={{ textAlign: "center" }}>
            <div className="quiz-area">
              <h2 style={{ color: "black" }}>{data.username}</h2>
            </div>
            <div className="answers-area" style={{ flexDirection: "column" }}>
              <div className="answer" htmlFor="answor1">
                <label style={{ color: "black" }} htmlFor="answor1">
                  كود :{data.userCode}
                </label>
              </div>

              <div className="answer">
                <label style={{ color: "black" }} htmlFor="answor2">
                  {data.exam ? (
                    <>قام الطالب باخر امتحان تم طرحه</>
                  ) : (
                    <>لم يقم الطالب باخر امتحان</>
                  )}
                </label>
              </div>
              <div className="answer">
                <label htmlFor="answor3">-:درجات الطالب</label>
              </div>
              {dgree.length > 0 ? (
                dgree.map((dg) => {
                  return (
                    <div
                      key={dg}
                      style={{
                        flexDirection: "column-reverse",
                        display: "flex",
                      }}
                    >
                      <div className="answer">
                        <label htmlFor="answor3">{dg}%</label>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="answer">
                  <label htmlFor="answor3">
                    لم يقم الطالب بامتحانات هذا الشهر
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuardianStudent;
