import React, { useEffect, useState } from "react";

const StudentTech = (props) => {
  const [data, setdata] = useState([]);
  const [addstudent, setaddstudent] = useState(false);
  const [name, setname] = useState("");
  const [code, setcode] = useState("");

  useEffect(() => {
    students();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const students = () => {
    fetch(props.apiusers)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setdata(data);
      });
  };

  const rerender = () => {
    fetch(props.apiusers)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((user) => {
          fetch(props.apiusers + "/" + user.id, {
            method: "PUT",
            headers: {
              "Content-Type": "Application/json",
            },
            body: JSON.stringify({
              userCode: user.userCode,
              examDegree: [],
              username: user.username,
              exam: user.exam,
            }),
          })
            .then((res) => {
              res.json();
            })
            .then((data) => {
              students();
            });
        });
      });
  };

  const addstudentdate = () => {
    return (
      <section>
        <div className="container">
          <div className="quiz-app add">
            <form className="quiz-area">
              <div className="answers-area ">
                <div className="answer">
                  <input
                    type="number"
                    onChange={(e) => {
                      fetch(props.apiusers)
                        .then((res) => {
                          return res.json();
                        })
                        .then((data) => {
                          if (data.length > 0) {
                            data.forEach((user) => {
                              if (user.userCode === Number(e.target.value)) {
                                alert("الكود موجود بالفعل");
                              } else {
                                setcode(e.target.value);
                              }
                            });
                          } else {
                            setcode(e.target.value);
                          }
                        });
                    }}
                    placeholder="اكتب كود الطالب المكون من 8 ارقام علي الاقل"
                    required
                  />
                </div>
                <div className="answer" htmlFor="answor1">
                  <input
                    type="text"
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    placeholder="اكتب اسم الطالب"
                    required
                  />
                </div>
              </div>
              <input
                type="submit"
                value={"اضافة طالب"}
                className="submit-button"
                onClick={(e) => {
                  e.preventDefault();
                  if (
                    name !== undefined &&
                    code !== undefined &&
                    name !== "" &&
                    code !== ""
                  ) {
                    fetch(props.apiusers, {
                      method: "POST",
                      headers: {
                        "Content-Type": "Application/json",
                      },
                      body: JSON.stringify({
                        userCode: +code,
                        username: name,
                        examDegree: [],
                        exam: false,
                      }),
                    })
                      .then((e) => {
                        return e.json();
                      })
                      .then((data) => {
                        setaddstudent(false);
                        students();
                      });
                  }
                }}
              />
            </form>
          </div>
        </div>
      </section>
    );
  };

  const allawExam = () => {
    fetch(props.apiusers)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((user) => {
          fetch(props.apiusers + "/" + user.id, {
            method: "PUT",
            headers: {
              "Content-Type": "Application/json",
            },
            body: JSON.stringify({
              userCode: user.userCode,
              examDegree: user.examDegree,
              username: user.username,
              exam: false,
            }),
          })
            .then((res) => {
              res.json();
            })
            .then((data) => {
              students();
            });
        });
      });
  };

  return addstudent ? (
    addstudentdate()
  ) : (
    <section>
      <div className="container">
        <div className="quiz-app">
          <div className="quiz-info" style={{ display: "block" }}>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <button
                className="submit-button"
                style={{ margin: "auto 10px" }}
                onClick={() => {
                  rerender();
                }}
              >
                اعادة الدرجات
              </button>
              <button
                className="submit-button"
                style={{ margin: "auto 10px" }}
                onClick={() => {
                  setaddstudent(true);
                }}
              >
                اضافة طالب
              </button>
            </div>
            <div>
              <button
                className="submit-button"
                onClick={() => {
                  allawExam();
                }}
              >
                السماح لجميع الطلاب بالامتحان
              </button>
            </div>
          </div>
          {data.map((stu) => {
            return (
              <div key={stu.id} style={{ textAlign: "center" }}>
                <div className="quiz-area">
                  <h2 style={{ color: "black" }}>{stu.username}</h2>
                </div>
                <form
                  className="answers-area"
                  style={{ flexDirection: "column" }}
                >
                  <div className="answer" htmlFor="answor1">
                    <label style={{ color: "black" }} htmlFor="answor1">
                      كود :{stu.userCode}
                    </label>
                  </div>
                  <div className="answer">
                    <label style={{ color: "black" }} htmlFor="answor2">
                      {stu.exam ? (
                        <> قام الطالب باخر امتحان </>
                      ) : (
                        <> لم يقم الطالب باخر امتحان </>
                      )}
                    </label>
                  </div>
                  <div className="answer">
                    <label htmlFor="answor3">درجات الطالب:- </label>
                  </div>
                  {stu.examDegree.length > 0 ? (
                    stu.examDegree.map((dg) => {
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
                        لم يقم الطالب باداء اي امتحان
                      </label>
                    </div>
                  )}
                  <button
                    className="submit-button"
                    onClick={(e) => {
                      e.preventDefault();
                      fetch(props.apiusers + "/" + stu.id, {
                        method: "DELETE",
                      })
                        .then((res) => {
                          res.json();
                        })
                        .then((data) => {
                          students();
                        });
                    }}
                  >
                    حذف الطالب
                  </button>
                </form>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudentTech;
