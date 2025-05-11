import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/task-1">Задание 1</Link>
          </li>
          <li>
            <Link to="/task-2">Задание 2</Link>
          </li>
          <li>
            <Link to="/task-3">Задание 3</Link>
          </li>
          <li>
            <Link to="/task-4">Задание 4</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
