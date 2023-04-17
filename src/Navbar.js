import { useState } from "react";
import Calculator from "./Calculator";
import Todo from "./Todo";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const renderSection = () => {
    switch (active) {
      case "calculator":
        return <Calculator />;
      case "todo":
        return <Todo />;
      default:
        return null;
    }
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/" className="home" onClick={() => setActive("home")}>
                HOME
              </a>
              <a href="#" onClick={() => setActive("calculator")}>
                Calculator
              </a>
              <a href="#" onClick={() => setActive("todo")}>
                Todo
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {renderSection()}
    </>
  );
}
