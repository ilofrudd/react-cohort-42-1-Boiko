// LESSONS
// 3 шаг - импортироуем компонент Lesson_02
import Lesson_02 from "./lessons/Lesson_02/Lesson_02";
import Lesson_03 from "./lessons/Lesson_03/Lesson_03";
import Lesson_04 from "./lessons/Lesson_04/Lesson_04";

// HOMEWORKS
import Homework_02 from "./homeworks/Homework_02/Homework_02";
import Homework_03 from "./homeworks/Homework_03/Homework_03";

// CONSULTATIONS

import "./App.css";

// Правила компонентов:
// 1. Названия пишем с большой буквы
// 2. Компонент - это функция и она должна возрващать JSX
// 3. JSX - синтаксический сахар, позволяющий возращать HTML элементы из компонента, а также прописывать логику прямо в HTML

function App() {
  return (
    <div className="App">
      {/* Lessons */}
      {/* 4 шаг - возвращаем компонент Lesson_02 из компонента App */}
      {/* <Lesson_02 /> */}
      {/* <Lesson_03 /> */}
      <Lesson_04 />
      {/* Homeworks */}
      {/* <Homework_02 /> */}
      {/* <Homework_03 /> */}
    </div>
  );
}

export default App;
