import React, { useState, useEffect } from "react";

const HomeworkPage = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(props.api)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setdata(data);
      });
  }, [props.api]);

  const homework = () => {
    return data.map((arr) => {
      return (
        <div key={arr.id} className="black">
          <label>{arr.homework}</label>
        </div>
      );
    });
  };

  return data.length === 0 ? (
    <section>
      <div className="container">
        <h1 className="soon">لا يوجد واجبات الان</h1>
      </div>
    </section>
  ) : (
    <section dir="rtl">
      <div className="container">
        <div className="quiz-app">
          <div className="answers-area">{homework()}</div>
        </div>
      </div>
    </section>
  );
};

export default HomeworkPage;
