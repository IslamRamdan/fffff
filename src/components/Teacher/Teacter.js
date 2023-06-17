import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imgstu from "../images/teacher.png";
import DashTeach from "../Dashboard/DashTeach";

const Teacter = () => {
  const [selectValue, setselectValue] = useState("");
  const [codeData, setcodeData] = useState([]);
  const [selector, setselector] = useState(false);
  const [dash, setdash] = useState(false);

  useEffect(() => {
    fetch("https://data-app-d9rt.onrender.com/codeTeacher")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setcodeData(data);
      });
  }, []);

  const fetchCode = (val) => {
    // eslint-disable-next-line array-callback-return
    codeData.map((code) => {
      if (+val === code.code) {
        setselector(true);
      }
    });
  };

  const selctor = () => {
    return (
      <>
        <select
          onChange={(e) => {
            setselectValue(e.target.value);
          }}
        >
          <option value="">اختر الصف</option>
          <option value="prep1">الصف الاول الاعدادي</option>
          <option value="prep2">الصف الثاني الاعدادي</option>
          <option value="prep3">الصف الثالث الاعدادي</option>
        </select>
        <Link
          to={"/teacher"}
          onClick={() => {
            if (selector !== false && selectValue !== "") {
              setdash(true);
            }
          }}
          className="btn"
        >
          ابدا
        </Link>
      </>
    );
  };

  const main = () => {
    if (dash === false) {
      return (
        <section className="hero">
          <div className="container">
            <div className="content">
              <div className="hero-img">
                <img src={imgstu} alt="err" />
              </div>
              <div className="hero-text">
                <h1 className="hero-title">مرحبا معلم</h1>
                <p className="main-text">
                  يمكنك التعديل علي جميع الاقسام من هنا
                </p>

                <form className="sec-select tech">
                  <input
                    type="number"
                    placeholder="اكتب كودك"
                    required
                    onChange={(e) => {
                      fetchCode(e.target.value);
                    }}
                  />

                  {selector ? selctor() : null}
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return <DashTeach props={selectValue} />;
    }
  };

  return main();
};

export default Teacter;
