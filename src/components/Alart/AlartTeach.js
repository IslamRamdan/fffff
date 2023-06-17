import React, { useEffect, useState } from "react";

const AlartTeach = (props) => {
  const [data, setdata] = useState([]);
  const [add, setadd] = useState("");
  const [show, setshow] = useState(false);

  useEffect(() => {
    allAlert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.api]);

  const allAlert = () => {
    fetch(props.api)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setdata(data);
      });
  };

  const deleteAlert = (arr) => {
    fetch(props.api + "/" + arr.id, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        allAlert();
      });
  };

  const alerts = () => {
    return data.map((arr) => {
      return (
        <div key={arr.id} className="black">
          <div className="label">
            <div> {arr.alert} </div>

            <div>
              <button
                onClick={() => {
                  deleteAlert(arr);
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

  const addAlert = () => {
    fetch(props.api, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        alert: add,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        setshow(false);
        allAlert();
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
              <div className="answers-area">{alerts()}</div>
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
                      addAlert();
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

export default AlartTeach;
