import React, { useEffect, useState } from "react";

const ExamsTeach = (props) => {
  // state pege AddQuiz
  const [h2, seth2] = useState("");
  const [answor1, setanswor1] = useState("");
  const [answor2, setanswor2] = useState("");
  const [answor3, setanswor3] = useState("");
  const [answor4, setanswor4] = useState("");
  const [ranswer, setranswer] = useState("");

  const [data, setdata] = useState([]);
  const [dash, setdash] = useState(false);

  useEffect(() => {
    all();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const all = () => {
    fetch(props.linkApi)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setdata(data);
      });
  };

  const deleteQuiz = (arr) => {
    fetch(props.linkApi + "/" + arr.id, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        all(data);
      });
  };

  const main = () => {
    if (dash) {
      return AddQuiz();
    } else {
      return (
        <section>
          <div className="container">
            <div className="quiz-app">
              <div className="quiz-info">
                <div>
                  <button
                    onClick={() => {
                      setdash(true);
                    }}
                    className="btn"
                  >
                    اضافة سؤال
                  </button>
                </div>
                <div className="count">
                  Questions Count: <span>{data.length}</span>
                </div>
              </div>

              {data.map((arr) => {
                return (
                  <div key={arr.id}>
                    <div className="quiz-area">
                      <h2>{arr.choose}</h2>
                    </div>
                    <div
                      className="answers-area"
                      style={{ flexDirection: "column" }}
                    >
                      <div className="answer" htmlFor="answor1">
                        <label htmlFor="answor1">{arr.answor1}</label>
                      </div>
                      <div className="answer">
                        <label htmlFor="answor2">{arr.answor2}</label>
                      </div>
                      <div className="answer">
                        <label htmlFor="answor3">{arr.answor3}</label>
                      </div>
                      <div className="answer">
                        <label htmlFor="answor4">{arr.answor4}</label>
                      </div>
                      <div className="answer ranswer">
                        <label htmlFor="answor4">{arr.answorTrue}</label>
                      </div>
                    </div>
                    <button
                      className="submit-button"
                      onClick={() => {
                        deleteQuiz(arr);
                      }}
                    >
                      حذف السؤال
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    }
  };

  const AddQuiz = () => {
    return (
      <section>
        <div className="container">
          <div className="quiz-app add">
            <form
              onSubmit={(e) => {
                e.preventDefault();

                fetch(props.linkApi, {
                  method: "POST",
                  headers: {
                    "Content-Type": "Application/json",
                  },
                  body: JSON.stringify({
                    choose: h2,
                    answor1,
                    answor2,
                    answor3,
                    answor4,
                    answorTrue: ranswer,
                  }),
                })
                  .then((res) => {
                    res.json();
                  })
                  .then((data) => {
                    setdash(false);
                    all();
                  });
              }}
              className="quiz-area"
            >
              <input
                type="text"
                onChange={(e) => {
                  seth2(e.target.value);
                }}
                placeholder="اكتب السؤال"
                required
              />

              <div className="answers-area ">
                <div className="answer" htmlFor="answor1">
                  <input
                    type="text"
                    onChange={(e) => {
                      setanswor1(e.target.value);
                    }}
                    placeholder="اكتب الاجابة الاولي"
                    required
                  />
                </div>
                <div className="answer">
                  <input
                    type="text"
                    onChange={(e) => {
                      setanswor2(e.target.value);
                    }}
                    placeholder="اكتب الاجابة الثانية"
                    required
                  />
                </div>
                <div className="answer">
                  <input
                    type="text"
                    onChange={(e) => {
                      setanswor3(e.target.value);
                    }}
                    placeholder="اكتب الاجابة الثالثة"
                    required
                  />
                </div>
                <div className="answer">
                  <input
                    type="text"
                    onChange={(e) => {
                      setanswor4(e.target.value);
                    }}
                    placeholder="اكتب الاجابة الرابعة"
                    required
                  />
                </div>
                <div className="answer ranswer">
                  <input
                    type="text"
                    onChange={(e) => {
                      setranswer(e.target.value);
                    }}
                    placeholder="اكتب الاجابة الصحيحة"
                    required
                  />
                </div>
              </div>
              <button className="submit-button">اضافة السؤال</button>
            </form>
          </div>
        </div>
      </section>
    );
  };

  return main();
};

export default ExamsTeach;
