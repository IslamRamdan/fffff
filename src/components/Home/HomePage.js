import React from "react";
import imghome from "../images/Education-cuate.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-img">
              <img src={imghome} alt="err" />
            </div>
            <div className="hero-text">
              <h1 className="hero-title">ابدأ تعليمك </h1>
              <p className="main-text">
                نحن منصة تعليمية فريدة ومميزة، حيث نقدم لك مجموعة واسعة من
                الموارد التعليمية الجميلة والفعالة لتساعدك على تحقيق التعلم
                السريع في مختلف المجالات. تتضمن مواردنا دروسًا مباشرة وفيديوهات
                وتمارين تفاعلية ومنصة للتواصل مع مجتمعنا التعليمي. انضم إلينا
                اليوم واحصل على الأدوات والموارد التي تحتاجها لتحقيق النجاح في
                مجالك المفضل
              </p>
              <div className="chenge">
                <Link to={"/student"} className="btn">
                  طالب
                </Link>
                <Link to={"/guardian"} className="btn">
                  ولي امر
                </Link>
                <Link to={"/teacher"} className="btn">
                  معلم
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
