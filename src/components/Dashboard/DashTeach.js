import React from "react";
import img1 from "../images/379717-PCAV0V-521.jpg";
import img2 from "../images/7605882.jpg";
import img3 from "../images/Studying-amico.png";
import img4 from "../images/stuteach.png";
import { Link } from "react-router-dom";

const DashTeach = (props) => {
  return (
    <section className="services">
      <div className="container">
        <h1 className="main-title"> اختر القسم</h1>
        <div className="content">
          <div className="service-card">
            <div className="card-content">
              <div className="image-card">
                <img src={img1} alt="err" />
              </div>
              <div className="text-center card-title">تنبيهات المدرس</div>
              <div className="card-footer">
                <div className="card-link">
                  <Link
                    to={"/teacher/" + props.props + "/alart"}
                    className="btn"
                  >
                    عرض
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="card-content">
              <div className="image-card">
                <img src={img2} alt="err" />
              </div>
              <div className="text-center card-title">الامتحانات</div>
              <div className="card-footer">
                <div className="card-link">
                  <Link
                    to={"/teacher/" + props.props + "/exam"}
                    className="btn"
                  >
                    عرض
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="card-content">
              <div className="image-card">
                <img src={img3} alt="err" />
              </div>
              <div className="card-title text-center">الواجبات</div>
              <div className="card-footer">
                <div className="card-link">
                  <Link
                    to={"/teacher/" + props.props + "/homework"}
                    className="btn"
                  >
                    عرض
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="card-content">
              <div className="image-card">
                <img src={img4} alt="err" />
              </div>
              <div className="card-title text-center">الطلاب</div>
              <div className="card-footer">
                <div className="card-link">
                  <Link
                    to={"/teacher/" + props.props + "/stutech"}
                    className="btn"
                  >
                    عرض
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashTeach;
