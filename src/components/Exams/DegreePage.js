import React, { useEffect } from "react";

const DegreePage = (props) => {
  // 50 => 65 مقبول
  // 66 => 75 جيد
  // 76 => 85  جيد جدا
  // 86 => 100 ممتاز

  useEffect(() => {
    fetch(props.userapi + "/" + props.parm.id)
      .then((res) => {
        return res.json();
      })
      .then((deta) => {
        let dgr = deta.examDegree;
        dgr.push((props.props / props.count) * 100);

        fetch(props.userapi + "/" + props.parm.id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({
            userCode: deta.userCode,
            examDegree: dgr,
            username: deta.username,
            exam: true,
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {});
      });
  }, [props.count, props.parm.id, props.props, props.userapi]);

  const present = () => {
    return (props.props / props.count) * 100;
  };

  const congratulate = () => {
    if (present() <= 100 && present() >= 86) {
      return <span className="congratulate">ممتاز جدا</span>;
    } else if (present() >= 76 && present() <= 85) {
      return <span className="congratulate">جيد جدا</span>;
    } else if (present() >= 66 && present() <= 75) {
      return <span className="congratulate">جيد</span>;
    } else if (present() >= 50 && present() <= 65) {
      return <span className="congratulate">مقبول</span>;
    } else if (present() < 50) {
      return <span className="congratulate">ضعيف</span>;
    }
  };

  return (
    <section className="degree">
      <div className="container">
        <div className="certificate" dir="rtl">
          <div className="certificate-header">
            {present() >= 50 ? (
              <h1>شهادة تقدير</h1>
            ) : (
              <h1>شهادة شكر واحترام</h1>
            )}
          </div>
          <div className="certificate-body">
            {present() >= 50 ? (
              <p>
                تهانينا على نجاحك في الامتحان أحرزت نتيجة رائعة ونحن فخورون بك
                نتمنى لك التوفيق والنجاح الدائم في مسيرتك الدراسية والمهنية
                مبروك مرة أخرى!
              </p>
            ) : (
              <p>
                الفشل ليس نهاية العالم، تعلّم من أخطائك وحاول مرة أخرى، وستتحقق
                النجاحات إن شاء الله. نحن نشجعك وندعمك.
              </p>
            )}

            <table>
              <thead>
                <tr>
                  <th>الموضوع</th>
                  <th>الدرجة</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>مستواك</td>
                  <td>{congratulate()}</td>
                </tr>

                <tr>
                  <td>درجتك</td>
                  <td>
                    {props.props} من {props.count}
                  </td>
                </tr>

                <tr>
                  <td>النتيجة بالنسبة المئوية</td>
                  <td>{present()}%</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DegreePage;
