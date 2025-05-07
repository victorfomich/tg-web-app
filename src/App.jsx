import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import Market from "./Market";
import "./App.css";

function App() {
  const [showMarket, setShowMarket] = useState(false);
  const [username, setUsername] = useState("...");

  useEffect(() => {
    WebApp.ready();
    if (WebApp.initDataUnsafe?.user?.username) {
      setUsername(WebApp.initDataUnsafe.user.username);
    }

    const moveCatRandomly = () => {
      const cat = document.getElementById("cat");
      if (!cat) return;

      const screenWidth = window.innerWidth - 64;
      const screenHeight = window.innerHeight - 64 - 70;

      const newX = Math.random() * screenWidth;
      const newY = Math.random() * screenHeight;

      cat.style.transform = `translate(${newX}px, ${newY}px)`;
    };

    moveCatRandomly();
    const interval = setInterval(moveCatRandomly, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <h2 className="username">👤 @{username}</h2>

      {/* Кот */}
      <img id="cat" src="/cat.png" className="cat" alt="cat" />

      {/* Нижняя кнопка */}
      <div className="bottom-menu">
        <button className="market-button" onClick={() => setShowMarket(true)}>Маркет</button>
      </div>

      {/* Маркет окно */}
      {showMarket && <Market onClose={() => setShowMarket(false)} />}
    </div>
  );
}

export default App;