import React, { useEffect, useState } from "react";

const AlartPage = (props) => {
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

  const alerts = () => {
    return data.map((arr) => {
      return (
        <div key={arr.id} className="black">
          <label>{arr.alert}</label>
        </div>
      );
    });
  };

  return data.length === 0 ? (
    <section>
      <div className="container">
        <h1 className="soon">لا يوجد تنبيهات الان</h1>
      </div>
    </section>
  ) : (
    <section dir="rtl">
      <div className="container">
        <div className="quiz-app">
          <div className="answers-area">{alerts()}</div>
        </div>
      </div>
    </section>
  );
};

export default AlartPage;
