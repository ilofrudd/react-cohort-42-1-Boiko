// 3 шаг - импортироуем компонент Lesson_02
import Lesson_02 from "./lessons/Lesson_02/Lesson_02";
import HomeWork_02 from "./homeworks/HomeWork_02/HomeWork_02";
import "./App.css";

// Правила компонентов:
// 1. Названия пишем с большой буквы
// 2. Компонент - это функция и она должна возрващать JSX
// 3. JSX - синтаксический сахар, позволяющий возращать HTML элементы из компонента, а также прописывать логику прямо в HTML

function App() {
  return (
    <div className="App">
      {/* 4 шаг - возвращаем компонент Lesson_02 из компонента App */}
      <HomeWork_02/>
    </div>
  );
}

export default App;
