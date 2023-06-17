import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgperant from "../images/Parents-amico.png";

const Guardian = () => {
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
            placeholder="اكتب كود ابنك"
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
            <img src={imgperant} alt="err" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">مرحبا بك</h1>
            <p className="main-text">
              مكان يمكّن ولي الأمر من متابعة تقدم طفله أو أطفاله في التعليم عن
              بعد. يشمل هذا القسم مجموعة من الميزات التي تساعد الوالدين على
              الاطلاع على نتائج الطلاب والتواصل مع المعلمين والإدارة
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
                  to={"/guardian/" + userId + "/" + selectValue}
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

export default Guardian;
