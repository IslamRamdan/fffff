import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import NavBarPage from "./components/NavBar/NavBarPage";
import Prep1Page from "./components/prep1/Prep1Page";
import Prep2Page from "./components/prep2/Prep2Page";
import Prep3Page from "./components/prep3/Prep3Page";
import AlartPage from "./components/Alart/AlartPage";
import HomeworkPage from "./components/Homework/HomeworkPage";
import ExamPage from "./components/Exams/ExamPage";
import Students from "./components/Home/Students";
import Guardian from "./components/Guardian/Guardian";
import Teacter from "./components/Teacher/Teacter";
import ExamsTeach from "./components/Exams/ExamsTeach";
import AlartTeach from "./components/Alart/AlartTeach";
import HWTeach from "./components/Homework/HWTeach";
import StudentTech from "./components/Home/StudentTech";
import GuardianStudent from "./components/Guardian/GuardianStudent";

function App() {
  return (
    <div className="App">
      <NavBarPage />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* start Guardian */}
        <Route path="/guardian" element={<Guardian />} />
        <Route path="/guardian/:id/:prep" element={<GuardianStudent />} />
        {/* end Guardian */}

        {/* start teacher */}
        <Route path="/teacher" element={<Teacter />} />

        {/* start prep1  */}
        <Route
          path="/teacher/prep1/exam"
          element={
            <ExamsTeach
              linkApi={"https://data-app-d9rt.onrender.com/prep1Exam"}
              props={"prep1"}
            />
          }
        />
        <Route
          path="/teacher/prep1/stutech"
          element={
            <StudentTech
              apiusers={"https://data-app-d9rt.onrender.com/usersPrep1"}
            />
          }
        />
        <Route
          path="/teacher/prep1/alart"
          element={
            <AlartTeach
              api={"https://data-app-d9rt.onrender.com/AlertsPrep1"}
            />
          }
        />
        <Route
          path="/teacher/prep1/homework"
          element={
            <HWTeach api={"https://data-app-d9rt.onrender.com/HomeworkPrep1"} />
          }
        />
        {/* end prep1  */}

        {/* start prep2  */}
        <Route
          path="/teacher/prep2/exam"
          element={
            <ExamsTeach
              linkApi={"https://data-app-d9rt.onrender.com/prep2Exam"}
              props={"prep2"}
            />
          }
        />
        <Route
          path="/teacher/prep2/stutech"
          element={
            <StudentTech
              apiusers={"https://data-app-d9rt.onrender.com/usersPrep2"}
            />
          }
        />
        <Route
          path="/teacher/prep2/alart"
          element={
            <AlartTeach
              api={"https://data-app-d9rt.onrender.com/AlertsPrep2"}
            />
          }
        />
        <Route
          path="/teacher/prep2/homework"
          element={
            <HWTeach api={"https://data-app-d9rt.onrender.com/HomeworkPrep2"} />
          }
        />
        {/* end prep2  */}

        {/* start prep3  */}
        <Route
          path="/teacher/prep3/exam"
          element={
            <ExamsTeach
              linkApi={"https://data-app-d9rt.onrender.com/prep3Exam"}
              props={"prep2"}
            />
          }
        />
        <Route
          path="/teacher/prep3/stutech"
          element={
            <StudentTech
              apiusers={"https://data-app-d9rt.onrender.com/usersPrep3"}
            />
          }
        />
        <Route
          path="/teacher/prep3/alart"
          element={
            <AlartTeach
              api={"https://data-app-d9rt.onrender.com/AlertsPrep3"}
            />
          }
        />
        <Route
          path="/teacher/prep3/homework"
          element={
            <HWTeach api={"https://data-app-d9rt.onrender.com/HomeworkPrep3"} />
          }
        />
        {/* end prep3  */}
        {/* end teacher */}

        {/* start student */}
        <Route path="/student" element={<Students />} />

        {/* start route prep1 */}
        <Route path="/student/:id/prep1" element={<Prep1Page />} />
        <Route
          path="/student/:id/prep1/exam"
          element={
            <ExamPage
              userapi={"https://data-app-d9rt.onrender.com/usersPrep1"}
              linkApi={"https://data-app-d9rt.onrender.com/prep1Exam"}
            />
          }
        />
        <Route
          path="/student/prep1/alart"
          element={
            <AlartPage api={"https://data-app-d9rt.onrender.com/AlertsPrep1"} />
          }
        />
        <Route
          path="/student/prep1/homework"
          element={
            <HomeworkPage
              api={"https://data-app-d9rt.onrender.com/HomeworkPrep1"}
            />
          }
        />
        {/* end route prep1 */}

        {/* start route prep2 */}
        <Route path="/student/:id/prep2" element={<Prep2Page />} />
        <Route
          path="/student/:id/prep2/exam"
          element={
            <ExamPage
              userapi={"https://data-app-d9rt.onrender.com/usersPrep2"}
              linkApi={"https://data-app-d9rt.onrender.com/prep2Exam"}
            />
          }
        />
        <Route
          path="/student/prep2/alart"
          element={
            <AlartPage api={"https://data-app-d9rt.onrender.com/AlertsPrep2"} />
          }
        />
        <Route
          path="/student/prep2/homework"
          element={
            <HomeworkPage
              api={"https://data-app-d9rt.onrender.com/HomeworkPrep2"}
            />
          }
        />
        {/* end route prep2 */}

        <Route path="/student/:id/prep3" element={<Prep3Page />} />
        <Route
          path="/student/:id/prep3/exam"
          element={
            <ExamPage
              userapi={"https://data-app-d9rt.onrender.com/usersPrep3"}
              linkApi={"https://data-app-d9rt.onrender.com/prep3Exam"}
            />
          }
        />
        <Route
          path="/student/prep3/alart"
          element={
            <AlartPage api={"https://data-app-d9rt.onrender.com/AlertsPrep3"} />
          }
        />
        <Route
          path="/student/prep3/homework"
          element={
            <HomeworkPage
              api={"https://data-app-d9rt.onrender.com/HomeworkPrep3"}
            />
          }
        />

        <Route path="*" element={<HomePage />} />
        {/* start student */}
      </Routes>
    </div>
  );
}

export default App;
