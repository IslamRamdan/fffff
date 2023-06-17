import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import imgstu from "../images/student.png";

const Students = () => {
  const [selectValue, setselectValue] = useState();
  const [inputval, setinputval] = useState();
  const [data, setData] = useState([]);
  const [showBTn, setshowBTn] = useState(false);
  const [userId, setuserId] = useState();

  const fetchData = (e) => {
    fetch("https://data-app-d9rt.onrender.com/users" + e.target.value)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  const inpbtn = () => {
    if (data.length > 0) {
      return (
        <>
          <input
            onChange={(e) => {
              setinputval(e.target.value);
              check(e);
            }}
            type="number"
            placeholder="اكتب كودك"
            required
            style={{ marginBottom: "20px" }}
          />
        </>
      );
    }
  };

  const check = (e) => {
    data.forEach((user) => {
      if (user.userCode === +e.target.value) {
        setuserId(user.id);
        setshowBTn(true);
      } else if (showBTn === true && user.userCode !== +e.target.value) {
        setshowBTn(false);
      }
    });
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-img">
            <img src={imgstu} alt="err" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">مرحبا بك في منصتنا</h1>
            <p className="main-text">
              نحن سعداء جداً لانضمامك إلينا ونتطلع إلى توفير تجربة تعليمية ممتعة
              وفعالة بالنسبة لك. سنعمل معاً على تحقيق أهدافك الأكاديمية وتطوير
              مهاراتك، ونحن هنا لمساعدتك في كل خطوة من الطريق.
            </p>

            <form className="sec-select tech">
              <select
                onChange={(e) => {
                  setselectValue(e.target.value);
                  fetchData(e);
                  setinputval("");
                  if (document.querySelector(".tech input")) {
                    document.querySelector(".tech input").value = "";
                  }
                }}
              >
                <option value="">اختر الصف</option>
                <option value="prep1">الصف الاول الاعدادي</option>
                <option value="prep2">الصف الثاني الاعدادي</option>
                <option value="prep3">الصف الثالث الاعدادي</option>
              </select>
              {inpbtn()}

              {showBTn && selectValue !== "" && inputval !== "" ? (
                <Link
                  to={"/student/" + userId + "/" + selectValue}
                  className="btn"
                >
                  ابدا
                </Link>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
