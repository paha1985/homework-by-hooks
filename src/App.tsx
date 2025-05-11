import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom"; 
import "./App.css";
import TaskUseFecth from "./components/taskUseFecth";
import { TaskUseLocalStorage } from "./components/taskUseLocalStorage";
import TaskUseHover from "./components/taskUseHover";
import { TaskUseViewportSize } from "./components/taskUseViewportSize";
import { TaskUseWindowScroll } from "./components/taskUseWindowScroll";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/task-1" element={<TaskUseFecth />} />
          <Route path="/task-2" element={<TaskUseLocalStorage />} />
          <Route path="/task-3" element={<TaskUseHover />} />
          <Route path="/task-4" element={<TaskUseViewportSize />} />
          <Route path="/task-5" element={<TaskUseWindowScroll />} />
          <Route path="/" element={<div>Выберите задание в сайдбаре</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
