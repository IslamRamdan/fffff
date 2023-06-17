import React from "react";
import img1 from "../images/379717-PCAV0V-521.jpg";
import img2 from "../images/7605882.jpg";
import img3 from "../images/Studying-amico.png";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
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
              <div className="card-title">تنبيهات المدرس</div>
              <div className="card-text">
                تقوم المنصة بتوفير قسم للتنبيهات للمعلمين لارسال اشعارات للطلاب
                حول المهام المقررة والمواعيد الهامة , وذلك لتحسين التواصل وتسهيل
                ادارة مواعيدهم .
              </div>
              <div className="card-footer">
                <div className="card-link">
                  <Link
                    to={"/student/" + props.props + "/alart"}
                    className="btn"
                  >
                    ابدا
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
              <div className="card-title">الامتحانات</div>
              <div className="card-text">
                يتيح قسم الامتحانات في منصات التعليم الالكتروني والتعليم عن بعد
                للمدرسين انشاء وتنظيم الاختبارات , وتصحيح الاجابات الكترونيا ,
                مما يساعد في تحسين جودة التعليم وتحديد مستوي الطالب
              </div>
              <div className="card-footer">
                <div className="card-link">
                  <Link
                    to={
                      "/student/" + props.parm.id + "/" + props.props + "/exam"
                    }
                    className="btn"
                  >
                    ابدا
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
              <div className="card-title">الواجبات</div>
              <div className="card-text">
                يسمح قسم الواجبات في منصتنا التعليمية بتحديد المهام المنزلية
                وتحميلها , مما يسهل عملية التقييم
              </div>
              <div className="card-footer">
                <div className="card-link">
                  <Link
                    to={"/student/" + props.props + "/homework"}
                    className="btn"
                  >
                    ابدا
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

export default Dashboard;
