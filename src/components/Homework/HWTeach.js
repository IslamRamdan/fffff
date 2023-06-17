import React, { useState, useEffect } from "react";

const HWTeach = (props) => {
  const [data, setdata] = useState([]);
  const [add, setadd] = useState("");
  const [show, setshow] = useState(false);

  useEffect(() => {
    allHomework();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.api]);

  const allHomework = () => {
    fetch(props.api)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setdata(data);
      });
  };

  const deleteHomework = (arr) => {
    fetch(props.api + "/" + arr.id, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        allHomework();
      });
  };

  const homeworks = () => {
    return data.map((arr) => {
      return (
        <div key={arr.id} className="black">
          <div className="label">
            <div> {arr.homework} </div>

            <div>
              <button
                onClick={() => {
                  deleteHomework(arr);
                }}
                className="btn"
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  const addHomework = () => {
    fetch(props.api, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        homework: add,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        setshow(false);
        allHomework();
      });
  };

  const main = () => {
    if (show === false) {
      return (
        <section dir="rtl">
          <div className="container">
            <div className="quiz-app">
              <div className="quiz-info">
                <div className="count">
                  <button
                    className="btn"
                    onClick={() => {
                      setshow(true);
                    }}
                  >
                    اضافة
                  </button>
                </div>
              </div>
              <div className="quiz-area"></div>
              <div className="answers-area">{homeworks()}</div>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section dir="rtl">
          <div className="container">
            <div className="quiz-app">
              <div className="quiz-info">
                <div className="count flex-all">
                  <input
                    type="text"
                    required
                    onChange={(e) => {
                      setadd(e.target.value);
                    }}
                  />
                  <button
                    className="btn"
                    onClick={() => {
                      addHomework();
                    }}
                  >
                    اضافة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };

  return main();
};

export default HWTeach;
