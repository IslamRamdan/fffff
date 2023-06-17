import React, { useState, useEffect } from "react";
import DegreePage from "./DegreePage";
import { useParams } from "react-router";

const ExamPage = (props) => {
  const [data, setData] = useState([{}]);
  const [numques, setnumques] = useState(0);
  const [degree, setdegree] = useState(0);
  const [final, setFinal] = useState(false);
  const [ex, setex] = useState(false);

  const parm = useParams();

  useEffect(() => {
    fetch(props.linkApi)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });

    fetch(props.userapi + "/" + parm.id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setex(data.exam);
      });
  }, [parm.id, props.linkApi, props.userapi]);

  const removeActive = () => {
    let answerDiv = document.querySelectorAll(".answer");
    answerDiv.forEach((div) => {
      div.classList.remove("active");
    });
  };

  const divchildren = (ele) => {
    removeActive();
    if (ele.target.children[0]) {
      ele.target.children[0].checked = true;
      ele.target.classList.add("active");
    } else {
      ele.target.parentElement.classList.add("active");
    }
  };

  const check = () => {
    if (final === true) {
      return (
        <DegreePage
          props={degree}
          userapi={props.userapi}
          count={data.length}
          parm={parm}
        />
      );
    } else {
      if (data.length === 0) {
        return (
          <section>
            <div className="container">
              <h1>loading...</h1>
            </div>
          </section>
        );
      } else {
        return (
          <>
            <section>
              <div className="container">
                <div className="quiz-app">
                  <div className="quiz-info">
                    <div className="count">
                      Questions Count:{" "}
                      <span>
                        {data.length} of {numques + 1}
                      </span>
                    </div>
                  </div>
                  <div className="quiz-area">
                    <h2>
                      {numques + 1}: {data[numques].choose}{" "}
                    </h2>
                  </div>
                  <form
                    className="answers-area"
                    style={{ flexDirection: "column" }}
                  >
                    <div
                      onClick={(e) => {
                        divchildren(e);
                      }}
                      className="answer"
                      htmlFor="answor1"
                    >
                      <input
                        type="radio"
                        data-answer={data[numques].answor1}
                        id="answor1"
                        name="questiond"
                      />
                      <label htmlFor="answor1"> {data[numques].answor1}</label>
                    </div>
                    <div
                      onClick={(e) => {
                        divchildren(e);
                      }}
                      className="answer"
                    >
                      <input
                        type="radio"
                        data-answer={data[numques].answor2}
                        id="answor2"
                        name="questiond"
                      />
                      <label htmlFor="answor2"> {data[numques].answor2}</label>
                    </div>
                    <div
                      onClick={(e) => {
                        divchildren(e);
                      }}
                      className="answer"
                    >
                      <input
                        type="radio"
                        data-answer={data[numques].answor3}
                        id="answor3"
                        name="questiond"
                      />
                      <label htmlFor="answor3"> {data[numques].answor3}</label>
                    </div>
                    <div
                      onClick={(e) => {
                        divchildren(e);
                      }}
                      className="answer"
                    >
                      <input
                        type="radio"
                        data-answer={data[numques].answor4}
                        id="answor4"
                        name="questiond"
                      />
                      <label htmlFor="answor4"> {data[numques].answor4}</label>
                    </div>
                  </form>
                  <button
                    className="submit-button "
                    onClick={() => {
                      removeActive();

                      let inputs = document.querySelectorAll(".answer input");

                      inputs.forEach((inp) => {
                        if (inp.checked) {
                          if (inp.dataset.answer === data[numques].answorTrue) {
                            setdegree(degree + 1);
                          }

                          setnumques(numques + 1);

                          inp.checked = false;
                        }
                        if (numques >= data.length - 1) {
                          setFinal(true);
                        }
                      });
                    }}
                  >
                    Submit Answer
                  </button>
                </div>
              </div>
            </section>
          </>
        );
      }
    }
  };

  return ex ? (
    <section>
      <div className="contaner">
        <h1 className="soon"> لقد اتممت الامتحان من قبل</h1>
      </div>
    </section>
  ) : (
    check()
  );
};

export default ExamPage;
